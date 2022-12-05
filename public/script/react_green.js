//1. 컴포넌트
function WrapComonent(){

   // 모달 상태관리
   const [show, setShow] = React.useState(false);

   // 모달열기 함수
   const modalOpen=()=>{
      setShow(true);
   }

   // 모달닫기 함수
   const modalClose=()=>{
      setShow(false);
   }


   return(
      <div id="wrap">
         <HeaderComponent/>
         <MainComponent modalOpen={modalOpen}/>
         <FooterComponent/>
         {
            show && <ModalComponent modalClose={modalClose}/>
         }
      </div>
   )
}

      function HeaderComponent(props){

         const {homePath,logoTitle,imgSrc,imgAlt, subMenu1,subMenu2,subMenu3,subMenu4} = props;

         // 상태관리 React.useState()
         const [addClass, setAddClass] = React.useState({
            addClass1: false,
            addClass2: false,
            addClass3: false,
            addClass4: false
         });

         // addClass 상태관리 객체의 속성을 비구조화
         const {addClass1,addClass2,addClass3,addClass4} = addClass;

         
         const onMouseEnter1=()=>{
            setAddClass({
               addClass1: true,
               addClass2: false,
               addClass3: false,
               addClass4: false
            })
         }
         const onMouseEnter2=()=>{
            setAddClass({
               addClass1: false,
               addClass2: true,
               addClass3: false,
               addClass4: false
            })
         }
         const onMouseEnter3=()=>{
            setAddClass({
               addClass1: false,
               addClass2: false,
               addClass3: true,
               addClass4: false
            })
         }
         const onMouseEnter4=()=>{
            setAddClass({
               addClass1: false,
               addClass2: false,
               addClass3: false,
               addClass4: true
            })
         }

         // NAV 를 떠나면 이벤트
         const onMouseLeaveAddCalss=()=>{
            setAddClass({
               addClass1: false,
               addClass2: false,
               addClass3: false,
               addClass4: false
            })
         }



         return(
            <header id="header">
               <div className="left">
                  <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt} /></a></h1>
               </div>
               <div className="right">
               <nav id="nav" onMouseLeave={onMouseLeaveAddCalss}>
                  <ul>
                     <li>
                        <a 
                        onMouseEnter={onMouseEnter1}
                        className={`main-btn ${ addClass1 && 'on' }` } 
                        href="#" 
                        title="재단소개"
                        >재단소개</a>

                        <div className={`sub sub1 ${ addClass1 && 'on' }`}>
                           <div className="container">
                              <ul>
                                 <li>
                                    <ul>
                                       {  // JSX 중괄호 안에 자바스크립트 코딩을 한다.
                                          subMenu1.map((item,idx)=>{
                                             return(
                                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                                             )
                                          })
                                       }
                                       {/* 
                                       <li><a href="#" title="설립취지">설립취지</a></li>
                                       <li><a href="#" title="연혁">연혁</a></li>
                                       <li><a href="#" title="찾아오시는길">찾아오시는길</a></li> 
                                       */}
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                       <li><a href="#">서브메뉴1</a></li>
                                       <li><a href="#">서브메뉴2</a></li>
                                       <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </div>
                        </div>
                    </li>
                    <li>
                        <a 
                        onMouseEnter={onMouseEnter2}
                        className={ `main-btn ${ addClass2 && 'on' }`} 
                        href="#" 
                        title="후원하기"
                        >후원하기</a>

                        <div className={`sub sub2 ${ addClass2 && 'on' } `}>
                           <div className="container">
                              <ul>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                       {
                                          subMenu2.map((item,idx)=>{
                                             return(
                                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                                             )
                                          })
                                       }
                                      {/* <li><a href="#" 국내후원>국내후원</a></li>
                                      <li><a href="#" 국외후원>국외후원</a></li>
                                      <li><a href="#" 맞춤후원>맞춤후원</a></li> */}
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                     <li>
                        <a 
                        onMouseEnter={onMouseEnter3}
                        className={`main-btn ${addClass3 && 'on'}`} 
                        href="#" 
                        title="자료실"
                        >자료실</a>
                        <div className={`sub sub3 ${addClass3 && 'on'}`}>
                           <div className="container">
                              <ul>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                       {
                                          subMenu3.map((item,idx)=>{
                                             return(
                                                <li key={item}><a href="#" title={item}>{item}</a></li>
                                             )
                                          })
                                       }
                                      {/* <li><a href="#" title="서식자료실">서식자료실</a></li>
                                      <li><a href="#" title="사진자료실">사진자료실</a></li>
                                      <li><a href="#" title="후원양식">후원양식</a></li> */}
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */} 
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </div>
                        </div>
                    </li>
                    <li>
                        <a 
                        onMouseEnter={onMouseEnter4}
                        className={`main-btn ${addClass4 && 'on'}`} 
                        href="#" 
                        title="스토리"
                        >스토리</a>
                        <div className={`sub sub4 ${addClass4 && 'on'}`}>
                           <div className="container">
                              <ul>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                       {
                                          subMenu4.map((item,idx)=>{
                                             return(
                                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                                             )
                                          })
                                       }
                                      {/* <li><a href="#" title="웹진">웹진</a></li>
                                      <li><a href="#" title="보고서">보고서</a></li>
                                      <li><a href="#" title="나의후원">나의후원</a></li> */}
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    {/*  1칸  */}
                                    <ul>
                                      <li><a href="#">서브메뉴1</a></li>
                                      <li><a href="#">서브메뉴2</a></li>
                                      <li><a href="#">서브메뉴3</a></li>
                                    </ul>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </li>
                  </ul>
               </nav>
               </div>
            </header>
         )
      }

      // 헤더컴포넌트 안에서 사용 하는 모든 변수
      // 기본(Default) 프롭스 설정
      HeaderComponent.defaultProps = {
         logoTitle: 'Green 복지재단',
         homePath: './index.html',
         imgSrc: './image/logo.png',
         imgAlt: 'Logo Image',
         subMenu1: ['설립취지','연혁','찾아오시는길'],
         subMenu2: ['국내후원','국외후원','맞춤후원'],
         subMenu3: ['서식자료실','사진자료실','후원양식'],
         subMenu4: ['웹진','보고서','나의후원']
      }

      function MainComponent(){
         return(
            <main id="main">
               <Section1Component/>
               <Section2Component/>
            </main>
         )
      }
      function Section1Component(){
         return(
            <section id="section1">
               <div className="slide-container">
                  <div className="slide-view">
                     <ul className="slide-wrap">
                        <li className="slide slide3"><a href="#" title="그린복지재단3"><img src="./image/img3.jpg" alt=""/></a></li>              
                        <li className="slide slide1"><a href="#" title="그린복지재단3"><img src="./image/img1.jpg" alt=""/></a></li>
                        <li className="slide slide2"><a href="#" title="그린복지재단3"><img src="./image/img2.jpg" alt=""/></a></li>
                        <li className="slide slide3"><a href="#" title="그린복지재단3"><img src="./image/img3.jpg" alt=""/></a></li>
                        <li className="slide slide1"><a href="#" title="그린복지재단3"><img src="./image/img1.jpg" alt=""/></a></li>              
                     </ul>
                  </div>
               </div>
            </section>
         )
      }
      function Section2Component({notice, gallery, modalOpen}){

         // 공지사항, 갤러리 상태관리
         const [show, setShow] = React.useState(false);
   
         const onClickNoticeBtnEvent=(e)=>{
            e.preventDefault();
            setShow(false);
         }
         const onClickGalleryBtnEvent=(e)=>{
            e.preventDefault();
            setShow(true);
         }
      
         // 공지사항 클릭 이벤트 => 모달띄우기
         const onClickModal=(e)=>{
            e.preventDefault();
            // 최상위 위치의 모달 열기 함수 실행
            modalOpen();
         }

         return(
            <section id="section2">
            <div className="left board">
            <button onClick={onClickNoticeBtnEvent} className= {`notice-btn ${show && 'on'}`}>공지사항</button>
            <div className={`notice-box board-box ${show && 'on'}`}>
                <div className="gap">
                  <ul>
                     {
                        notice.map((item,idx)=>{
                           return(
                              <li key={idx}><a href="#" onClick={idx===0 && onClickModal}  className={idx===0  && 'modal-btn'}>{item.공지글}</a><span>{item.날짜}</span></li>
                           )
                        })
                     }
                     {/* 첫번째 줄만 클래스 추가 */}
                     {/* <li><a href="#" title="Green 복지재단1" className="modal-btn">Green 복지재단1</a><span>2020.11.23</span></li>
                     <li><a href="#" title="Green 복지재단2">Green 복지재단2</a><span>2020.11.23</span></li>
                     <li><a href="#" title="Green 복지재단3">Green 복지재단3</a><span>2020.11.23</span></li>
                     <li><a href="#" title="Green 복지재단4">Green 복지재단4</a><span>2020.11.23</span></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="center board">
            <button onClick={onClickGalleryBtnEvent} className={`gallery-btn ${show && 'on'}`}>갤러리</button>
            <div className={`gallery-box board-box ${show && 'on'}`}>
                <div className="gap">
                  <ul>
                     {
                        gallery.map((item, idx)=>{
                           return(
                              <li key={idx}>
                                 <div className="col-gap"><a href="#" title={item.제목}><img src={item.이미지소스} alt=""/></a></div>
                              </li>                                       
                           )
                        })
                     }
                     {/* 첫번째 줄만 클래스 추가 */}
                     {/* <a href="#" title="icon1"><img src="./images/icon1.png" alt="icon1"/></a>
                     <a href="#" title="icon2"><img src="./images/icon2.png" alt="icon2"/></a>
                     <a href="#" title="icon3"><img src="./images/icon3.png" alt="icon3"/></a> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="banner">
              <div className="title"><h2 style={{color:'rgb(95,0,128)', fontSize:'16px'}}>BANNER LINK</h2></div>
                <div className="img-box">
                  <a href="#" title="banner"><img src="./image/banner.jpg" alt="banner"/></a>
                </div>
              </div>
            </div>
          </section>
         )
      }

      // 기본 프롭스 만들기
      Section2Component.defaultProps = {
         notice : [
            {공지글:"신규회원 대상 할인 이벤트 안내",날짜:"2020.11.23"},
            {공지글:"S/S 시즌 신규 의류 신상품 안내",날짜:"2020.11.12"},
            {공지글:"반품/환불 규정에 대해 알려드립니다",날짜:"2020.11.07"},
            {공지글:"3월 재입고 품목을 알려드립니다",날짜:"2020.10.28"}
         ],
         gallery : [
            {제목:"img1", 이미지소스: "./image/icon1.jpg"},
            {제목:"img2", 이미지소스: "./image/icon2.jpg"},
            {제목:"img3", 이미지소스: "./image/icon3.jpg"}
         ]
      }

      function FooterComponent(){
         return(
            <footer id="footer">
               <div className="left">
                 <h1><a href="#" title="Logo"><img src="./image/footerLogo.png" alt="Logo"/></a></h1>
               </div>
               <div className="center">
                 <div className="row1">
                   <span><a href="#" title="하단메뉴1">하단메뉴1</a></span>
                   <span><i>|</i></span>
                   <span><a href="#" title="하단메뉴2">하단메뉴2</a></span>
                   <span><i>|</i></span>
                   <span><a href="#" title="하단메뉴3">하단메뉴3</a></span>
                 </div>
                 <div className="row2">
                   <p>COPYRIGHTⓒ by WEBDESIGN. ALL RIGHTS RESERVED</p>
                 </div>
               </div>
               
               <div className="right">
                  <select name="family" id="family">
                    <option value="" selected>패밀리 사이트</option>
                    <option value="패밀리사이트1">패밀리 사이트1</option>
                    <option value="패밀리사이트2">패밀리 사이트2</option>
                    <option value="패밀리사이트3">패밀리 사이트3</option>
                  </select>
               </div>
            </footer>
         )
      }


      function ModalComponent({modalClose}){

         const onClickModalClose=(e)=>{
            e.preventDefault();
            modalClose();
         }

         return(
            <div id="modal">
               <div className="wrap">
                 <div className="container">
                   <div className="gap">
                     <div className="title">
                       <h1>복지재단 공지사항</h1>
                     </div>
                     <div className="content">
                       <ol>
                         <li> 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.</li>
                         <li>무궁화 삼천리 화려강 대한 사람 대한으로 길이 보전하세</li>
                         <li>남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.</li>
                       </ol>
                     </div>
         
                     <div className="button-box">
                       <button className="modal-close-btn">닫기</button>
                     </div>
         
                   </div>
                 </div>
               </div>
            </div>
         )         
      }

// Create React App  앱제작시 사용하기로
//2. 리액돔은 루트 돔컨테이너(#root)와 컴포넌트(WrapComonent) 연동 시킨다.
// const root = ReactDOM.createRoot( document.getElementById('root') );
// root.render(
//    <WrapComonent/>
// );

ReactDOM.render(
   <WrapComonent/>,
   document.getElementById('root')
);
