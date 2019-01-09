/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 15:33:15
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 17:25:37
 */

// Base Component
import React from 'react';

// Ant design Component
import { Modal as PopUp } from 'antd';

// Ett Components
import EttComponents from '../constants';

/**
 *@description Modal Component to display Message like a alert with props title and content
 */
const Modal = ({
  title, content, handleOk, onCancel, showModal,
}) => {
  function confirm() {
    PopUp.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
    });
  }

  return (
    <div onClick={confirm}>
      <PopUp title={title} onOk={handleOk} onCancel={onCancel} visible={showModal}>
        <EttComponents.Paragraph>{content}</EttComponents.Paragraph>
      </PopUp>
    </div>
  );
};

export default Modal;
