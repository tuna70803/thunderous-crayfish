/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * xml string을 object로 변환해서 리턴한다.
 * @param xmlString - xml string
 * @returns object로 변환된 데이터. 파싱 에러시 null.
 */
export const xmlStringToObject = (xmlString: string) => {
  const xmlDoc = parseXmlString(xmlString);
  if (xmlDoc === null) {
    return null;
  }

  return xmlToObject(xmlDoc);
};

/**
 * xml document를 object로 변환해서 리턴한다.
 * @param xml - xml document
 * @returns 변환된 object
 */
export const xmlToObject = (xml: Document) => {
  const rootNode = xml.documentElement;
  const rootObject = parseNode(rootNode);

  return {
    [rootNode.nodeName]: rootObject,
  };
};

/**
 * xml string을 xml document로 파싱해서 리턴한다.
 * @param xmlString - xml string
 * @returns 파싱한 xml document. 파싱 에러시 null.
 */
export const parseXmlString = (xmlString: string) => {
  const xmlDoc = new DOMParser().parseFromString(xmlString, 'application/xml');
  const errorNode = xmlDoc.querySelector('parsererror');
  if (errorNode) {
    return null;
  }

  return xmlDoc;
};

/**
 * XML 노드를 파싱한다.
 * 자식 요소도 같이 파싱해서 구성한다.
 * 파싱할 때 속성 정보도 같이 자식으로 구성한다.
 * @param node - XML Node
 * @returns 파싱한 내용. 텍스트나 엘리먼트 노드가 아니라면 null.
 */
const parseNode = (node: Node) => {
  if (isTextNode(node)) {
    return node.nodeValue?.trim() || '';
  }

  if (!isElementNode(node)) {
    return null;
  }

  const childNodes = Array.from(node.childNodes);
  const children = childNodes.reduce<Record<string, any>>((result, child) => {
    const childObject = parseNode(child);
    if (childObject === null) {
      return result;
    }

    if (childObject === '') {
      return result;
    }

    const { nodeName } = child;
    if (result[nodeName]) {
      result[nodeName] = Array.isArray(result[nodeName])
        ? [...result[nodeName], childObject]
        : [result[nodeName], childObject];
    } else {
      result[nodeName] = childObject;
    }

    return result;
  }, {});

  const attributes = getAttributes(node);
  if (hasAttributes(attributes)) {
    return {
      ...attributes,
      ...children,
    };
  }

  if (hasTextChildOnly(children)) {
    return children['#text'];
  }

  return children;
};

/**
 * 엘리먼트 노드인지 확인한다.
 * @param node - 확인할 노드
 * @returns 엘리먼트 노드라면 true, 아니라면 false.
 */
const isElementNode = (node: Node): node is Element => node.nodeType === 1;

/**
 * 텍스트 노드인지 확인한다.
 * @param node - 확인할 노드
 * @returns 텍스트 노드라면 true, 아니라면 false.
 */
const isTextNode = (node: Node): node is Text => node.nodeType === 3;

/**
 * 속성을 가지고 있는지 확인한다.
 * @param attrs - 속성 목록
 * @returns 속성이 하나라도 있다면 true, 없으면 false.
 */
const hasAttributes = (attrs: Record<string, string>) =>
  Object.keys(attrs).length > 0;

/**
 * 자식으로 텍스트 노드 하나만 가지고 있는지 확인한다.
 * @param children - 자식 노드 목록
 * @returns 텍스트 노드 하나뿐이면 true, 그 외 모든 구성은 false.
 */
const hasTextChildOnly = (children: Record<string, any>) => {
  if (Object.keys(children).length !== 1) {
    return false;
  }

  if (typeof children['#text'] !== 'string') {
    return false;
  }

  return true;
};

/**
 * XML 노드의 속성 목록을 리턴한다.
 * @param xmlNode - 속성 목록을 정리할 XML 노드
 * @returns 속성 목록
 */
const getAttributes = (xmlNode: Element): Record<string, string> => {
  return Array.from(xmlNode.attributes).reduce(
    (attrs, attr) => ({
      ...attrs,
      [attr.nodeName]: attr.nodeValue,
    }),
    {},
  );
};
