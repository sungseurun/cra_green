import React from 'react';

function HeaderCom (props) {
  const {homePath,logoTitle,imgSrc,imgAlt,subMenu1,subMenu2,subMenu3,subMenu4} = props;
      
      
  // 상태관리 React.useState()
  // const [addClass1, setAddClass1] = React.useState(false);
  // const [addClass2, setAddClass2] = React.useState(false);
  // const [addClass3, setAddClass3] = React.useState(false);
  // const [addClass4, setAddClass4] = React.useState(false);

  const [addClass, setAddClass] = React.useState({
    addClass1:false, addClass2:false, addClass3:false, addClass4:false
  });

  // addClass 를 비구조화 설정 
  const {addClass1, addClass2, addClass3, addClass4} = addClass;

  const onMouseEnter1 = () =>{
    setAddClass({
      addClass1:true, addClass2:false, addClass3:false, addClass4:false,
    });
  }
  const onMouseEnter2 = () =>{
    setAddClass({
      addClass1:false, addClass2:true, addClass3:false, addClass4:false,
    })
  }
  const onMouseEnter3 = () =>{
    setAddClass({
      addClass1:false, addClass2:false, addClass3:true, addClass4:false,
    })
  }
  const onMouseEnter4 = () =>{
    setAddClass({
      addClass1:false, addClass2:false, addClass3:false, addClass4:true,
    })
  }

  // NAV를 떠나면 이벤트 
  const onMouseLeaveAddCalss=()=>{
    setAddClass({
       addClass1: false,
       addClass2: false,
       addClass3: false,
       addClass4: false
    })
 }

  return (
    <header id="header">
    <div className="left">
      <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt} /></a></h1>
    </div>
    <div className="right">
      <nav id="nav" onMouseLeave={onMouseLeaveAddCalss}>
        <ul>
          <li> 
            {/* 메뉴1번 */}
            <a 
            onMouseEnter={onMouseEnter1}                     
            className={`main-btn  ${ addClass1 && 'on' }`}
            href="!#"                       
            title="탑"
            >탑</a>
            {/* <div className={addClass1 ? 'sub sub1 on' : 'sub sub1'}> */}
            <div className={ `sub sub1  ${addClass1 && 'on'}`}>
              <ul>
                { 
                // map 함수를 이용해서 태그를 반복하는 
                  subMenu1.map((item,idx)=>{
                    return(
                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                    )
                  })
                }
              </ul>
            </div>
          </li>
          <li>
            {/* 메뉴 2번 */}
            <a 
            onMouseEnter = {onMouseEnter2}
            href="!#"
            className={ ` main-btn ${addClass2 && 'on'}`} 
            // className={addClass2 ? 'main-btn on' : 'main-btn' } 
            title="아우터"
            >아우터</a>
            <div className={` sub sub2 ${addClass2 && 'on'}`}>
            {/* <div className={addClass2 ? 'sub sub2 on' : 'sub sub2'}> */}
              <ul>
                {
                  subMenu2.map((item,idx)=>{
                    return(
                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                    )
                  })
                }
              </ul>
            </div>              
          </li>
          <li>
            {/* 메뉴3번 */}
            <a 
            onMouseEnter = {onMouseEnter3}
            href="!#" 
            className={ `main-btn ${addClass3 && 'on'} `} 
            // className={addClass3 ? 'main-btn on' : 'main-btn' } 
            title="팬츠"
            >팬츠</a>
            <div className={ `sub sub3 ${ addClass3 && 'on'}`}>
            {/* <div className={addClass3 ? 'sub sub3 on' : 'sub sub3'}> */}
              <ul>
                {
                  subMenu3.map((item,idx)=>{
                    return(
                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                    )
                  })
                }
              </ul>
            </div>                
          </li>
          <li>
            {/* 메뉴4번 */}
            <a 
            onMouseEnter = {onMouseEnter4}
            href="!#" 
            className={ ` main-btn ${addClass4 && 'on'} `} 
            // className={addClass4  ? 'main-btn on' : 'main-btn' } 
            title="악세서리"
            >악세서리</a>
            <div className={`sub sub4 ${addClass4 && 'on'}`}>
            {/* <div className={addClass4 ? 'sub sub4 on' : 'sub sub4'}> */}
              <ul>
                {
                  subMenu4.map((item,idx)=>{
                    return(
                      <li key={idx}><a href="!#" title={item}>{item}</a></li>
                    )
                  })
                }
              </ul>
            </div>  
          </li>
        </ul>
      </nav>
    </div>
    </header>
  );
};

HeaderCom.defaultProps = {
  logoTitle : 'JUST쇼핑몰' ,
  homePath : './index.html' ,
  imgSrc : './images/logo.png' ,
  imgAlt : 'logo' ,
  subMenu1 : ['블라우스' , '티' , '셔츠' , '니트'],
  subMenu2 : ['자켓' , '코트' , '가디건' , '머플러'],
  subMenu3 : ['청바지' , '짧은바지' , '긴바지' , '레깅스'],
  subMenu4 : ['귀고리' , '목걸이' , '반지' , '팔찌'],
}

export default HeaderCom;