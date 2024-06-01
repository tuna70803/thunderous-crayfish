import { expect, describe, it } from 'vitest';
import { xmlStringToObject, parseXmlString } from './xml';

describe('xmlStringToObject() 은', () => {
  it('xml string을 object로 변환해 리턴한다.', () => {
    const obj = xmlStringToObject(`
    <root>
      <node1>Node 1</node1>
      <node2>Node 2</node2>
    </root>`);

    expect(obj).toEqual({
      root: {
        node1: 'Node 1',
        node2: 'Node 2',
      },
    });
  });

  it('태그가 같으면 배열로 변환한다.', () => {
    const obj = xmlStringToObject(`
    <root>
      <child>Child 1</child>
      <child>Child 2</child>
    </root>`);

    expect(obj).toEqual({
      root: {
        child: ['Child 1', 'Child 2'],
      },
    });
  });

  it('빈 태그는 empty object로 값을 설정한다.', () => {
    const obj = xmlStringToObject('<root></root>');

    expect(obj).toEqual({ root: {} });
  });

  it('스스로 닫는 태그도 empty object로 값을 설정한다.', () => {
    const obj = xmlStringToObject('<root />');

    expect(obj).toEqual({ root: {} });
  });

  it('xml 선언은 object에 포함하지 않는다.', () => {
    const obj =
      xmlStringToObject(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <root></root>
    `);

    expect(obj).toEqual({ root: {} });
  });

  it('텍스트, 엘리먼트 태그외 주석이나 나머지 태그는 object에 포함하지 않는다.', () => {
    const obj = xmlStringToObject(`
      <root>
      <!-- 이것은 주석입니다 -->
      </root>
    `);

    expect(obj).toEqual({ root: {} });
  });

  it('xml 양식에 맞지 않으면 null을 리턴한다.', () => {
    const obj = xmlStringToObject('나는 xml 문서가 아닙니다');

    expect(obj).toBeNull();
  });
});

describe('parseXmlString() 은', () => {
  it('xml string을 XMLDocument로 파싱해 리턴한다.', () => {
    const xmlDocument = parseXmlString('<root></root>');

    expect(xmlDocument).toBeInstanceOf(Document);
  });

  it('파싱 에러가 발생하면 null을 리턴한다.', () => {
    const xmlDocument = parseXmlString('나는 xml 문서가 아닙니다.');

    expect(xmlDocument).toBeNull();
  });
});
