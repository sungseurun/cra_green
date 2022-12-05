import React from 'react';
import HeaderCom from './HeaderCom';
import MainCom from './MainCom';
import FooterCom from './FooterCom';
import ModalCom from './ModalCom';

function WrapCom (){

  const [show, setShow] = React.useState(false);

  // 모달 부모컴퍼넌트에서 
  // 상태변경 함수를 만든다
  // 그리고 자식 컴포넌트에게 프롭스로 함수를 내려주고
  // 버튼 클릭 이벤트로 상태변경함수를 실행한다. 그러면 변경
  
  // 모달열기 함수 
  const modalOpen =()=>{
    setShow(true);
  }
  
  // 모달닫기 함수
  const modalClose =()=>{
    setShow(false);
  }
  
  return (
    <div id="wrap">
      <HeaderCom/>
      <MainCom modalOpen={modalOpen}/>
      <FooterCom/>
      {
        show && <ModalCom modalClose={modalClose}/>
      }
    </div>
  );
};

export default WrapCom;