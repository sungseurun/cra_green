import React from 'react';

function Section2Com ({notice, gallery,modalOpen}){
  const [show, setShow] =React.useState(false)
          

  const onClickNoticeBtnEvent =(e)=>{
    e.preventDefault();
    setShow(false);
  }
  const onClickGalleryBtnEvent =(e)=>{
    e.preventDefault();
    setShow(true);
  }

  // 공지사항 클릭 이벤트 = 모달 띄우기
  const onClickModal =(e, z)=>{
    e.preventDefault();
    
    // 최상위 위치의 모달 열기 함수 실행
    if(z!==0) return;
    modalOpen();
  }


  return (
    <section id="section2">
    <div className="left">
      <button onClick={onClickNoticeBtnEvent} className={`notice-btn ${show && 'on'}`}>공지사항</button>
      <button onClick={onClickGalleryBtnEvent} className={`gallery-btn ${show && 'on'}`}>갤러리</button>
      <div className={`notice-box ${show && 'on'}`}>
        <div className="gap">
            <ul>
              {
                notice.map((item,idx)=>{
                  return(
                    <li key={idx}><a href="!#" onClick={(e)=>onClickModal(e,idx)} className={idx===0 ? 'modal-btn' : ''}>{item.공지글}</a><span>{item.날짜}</span></li>
                  )
                })
              }
            </ul>
        </div>
      </div>
      <div className={`gallery-box ${show && 'on'}`}>
        <div className="gap">
          <ul>
            {
              gallery.map((item, idx)=>{
                return(
                  <li key={idx}>
                    <div className="col-gap"><a href="!#" title={item.제목}><img src={item.imgSrc} alt="" /></a></div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
    <div className="center">
      <div className="title"><h2 style={{color:'rgb(95,0,128)', fontSize:'16px' , fontWeight:'700'}}>BANNER LINK</h2></div>
      <div className="img-box">
        <a href="!#" title="banner"><img src="./images/banner.jpg" alt="" /></a>
      </div>
    </div>
    <div className="right">
      <div className="title"><h2 style={{color:'rgb(95,0,128)', fontSize:'16px' , fontWeight:'700'}}>DIRECT LINK</h2></div>
      <div className="img-box">
        <a href="!#" title="direct"><img src="./images/direct.jpg" alt="" /></a>
      </div>
    </div>  
  </section>
  );
};

Section2Com.defaultProps = {
  notice : [
    {공지글 : "신규회원 대상 할인 이벤트 안내" , 날짜 : "2020.11.23"},
    {공지글 : "S/S 시즌 신규 의류 신상품 안내" , 날짜 : "2020.11.12"},
    {공지글 : "반품/환불 규정에 대해 알려드립니다" , 날짜 : "2020.11.07"},
    {공지글 : "3월 재입고 품목을 알려드립니다" , 날짜 : "2020.10.28"},
  ],
  gallery : [
    {제목: "img1" , imgSrc: "./images/icon1.jpg"},
    {제목: "img2" , imgSrc: "./images/icon2.jpg"},
    {제목: "img3" , imgSrc: "./images/icon3.jpg"},
  ]
}

export default Section2Com;