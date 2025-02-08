import { Navigate, Route, Routes } from "react-router-dom";
import TOC from "../TOC";


export default function Home() {
     return (
          <div className="wd_screen_layout">
               <div style={{ width: 339, height: 26, left: 471, top: 47, position: 'absolute' }}>
                    <div style={{ width: 48, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Khula', fontWeight: '700', wordWrap: 'break-word' }}>Home</div>
                    <div style={{ width: 62, left: 277, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Khula', fontWeight: '600', wordWrap: 'break-word' }}>Contact</div>
                    <div style={{ width: 60, left: 88, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Khula', fontWeight: '600', wordWrap: 'break-word' }}>Recipes </div>
                    <div style={{ width: 49, left: 188, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Khula', fontWeight: '600', wordWrap: 'break-word' }}>About</div>
               </div>
               <div style={{ width: 304, height: 44, left: 937, top: 38, position: 'absolute' }}>
                    <div style={{ width: 304, height: 44, left: 0, top: 0, position: 'absolute', borderRadius: 10, border: '1px #9D6224 solid' }} />
                    <div style={{ width: 33.15, height: 30, left: 258, top: 7, position: 'absolute' }}>
                         <div style={{ width: 17.24, height: 15.60, left: 6.63, top: 6, position: 'absolute', background: '#9D6224' }}></div>
                         <div style={{ width: 6.89, height: 6.24, left: 20.73, top: 18.76, position: 'absolute', background: '#9D6224' }}></div>
                    </div>
                    <div style={{ left: 16, top: 14, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>What would you like to cook?</div>
               </div>
               <img style={{ width: 1280, height: 365, left: 0, top: 130, position: 'absolute', filter: 'blur(1.5px)' }} src="./images/studio_g.png" />
               <div style={{ width: 34, height: 9, left: 623, top: 476, position: 'absolute' }}>
                    <div style={{ width: 9, height: 9, left: 0, top: 0, position: 'absolute', background: '#A8A7A7', borderRadius: 9999 }} />
                    <div style={{ width: 9, height: 9, left: 12, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
                    <div style={{ width: 9, height: 9, left: 25, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
               </div>
               <div style={{ width: 321, height: 128, left: 950, top: 298, position: 'absolute', textAlign: 'right', color: '#333333', fontSize: 64, fontFamily: 'BIZ UDPMincho', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word' }}>Spirited Away</div>
               <div style={{ width: 321, height: 128, left: 950, top: 295, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 64, fontFamily: 'BIZ UDPMincho', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word' }}>Spirited Away</div>
               <div style={{ left: 1119, top: 272, position: 'absolute', textAlign: 'right', color: '#333333', fontSize: 16, fontFamily: 'BIZ UDPMincho', fontWeight: '700', wordWrap: 'break-word' }}>Studio Ghibli’s </div>
               <div style={{ left: 1119, top: 271, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'BIZ UDPMincho', fontWeight: '700', wordWrap: 'break-word' }}>Studio Ghibli’s </div>
               <div style={{ width: 950, left: 169, top: 539, position: 'absolute', textAlign: 'center', color: '#F1522A', fontSize: 50, fontFamily: 'Brawler', fontWeight: '700', wordWrap: 'break-word' }}>“Food always comes to those who love to cook”</div>
               <div style={{ width: 993, left: 142, top: 702, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 20, fontFamily: 'Source Serif Pro', fontWeight: '700', wordWrap: 'break-word' }}>Ever watched a movie or show and wished you could taste the delicious dishes on screen? Our menu brings those iconic animated meals to life, letting you cook and savor the foods you’ve craved from your favorite films, shows, and games</div>
               <div style={{ left: 593, top: 661, position: 'absolute', color: '#F1522A', fontSize: 14, fontFamily: 'Murecho', fontWeight: '700', wordWrap: 'break-word' }}>-Ratatouille</div>
               <div style={{ width: 1212, paddingTop: 5.42, paddingBottom: 15, paddingLeft: 21, paddingRight: 20, left: 23, top: 903, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', alignSelf: 'stretch', position: 'relative' }}>
                         <div style={{ width: 356.39, height: 426.58, left: 408.61, top: 0, position: 'absolute' }}>
                              <div style={{ width: 344.41, height: 424.96, left: 5.02, top: 1.62, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                              <div style={{ width: 356.11, height: 421.78, left: 0, top: 0.03, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                              <div style={{ width: 300.94, height: 58.89, left: 28.39, top: 331, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Murecho', fontWeight: '600', wordWrap: 'break-word' }}>Princess and The Frog’s <br />Beignets </div>
                              <img style={{ width: 356, height: 314.49, left: 0.39, top: 0, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="https://via.placeholder.com/356x314" />
                         </div>
                         <div style={{ width: 356.11, height: 420.80, left: 814.89, top: 1, position: 'absolute' }}>
                              <div style={{ width: 344.41, height: 418.59, left: 5.02, top: 2.21, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                              <div style={{ width: 356.11, height: 415.41, left: 0, top: 0.62, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                              <div style={{ width: 171, height: 27, left: 92.11, top: 339, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Murecho', fontWeight: '600', wordWrap: 'break-word' }}>Naruto’s Ramen</div>
                              <img style={{ width: 356, height: 313, left: 0.11, top: 0, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="https://via.placeholder.com/356x313" />
                         </div>
                         <div style={{ width: 359.46, height: 418.59, left: 0, top: 1.58, position: 'absolute' }}>
                              <div style={{ width: 349.43, height: 417, left: 5.02, top: 1.59, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                              <div style={{ width: 359.46, height: 413.82, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                              <div style={{ width: 309.30, height: 41.38, left: 25, top: 342.42, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Murecho', fontWeight: '600', wordWrap: 'break-word' }}>Spongebob’s Krabby Patty</div>
                              <img style={{ width: 359, height: 318, left: 0, top: 0.42, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="https://via.placeholder.com/359x318" />
                         </div>
                    </div>
               </div>
               <div style={{ width: 232, height: 26, left: 49, top: 857, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'BIZ UDPMincho', fontWeight: '700', wordWrap: 'break-word' }}>Popular Dishes</div>
               <div style={{ width: 265, height: 26, left: 55, top: 1394, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'BIZ UDPMincho', fontWeight: '700', wordWrap: 'break-word' }}>Latest Dishes</div>
               <div style={{ width: 614, height: 595, left: 55, top: 1450, position: 'absolute' }}>
                    <div style={{ width: 590, height: 593, left: 12, top: 2, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                    <div style={{ width: 614, height: 589, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                    <div style={{ width: 201, height: 39, left: 206, top: 418, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Murecho', fontWeight: '500', wordWrap: 'break-word' }}>Ratatouille</div>
                    <div style={{ width: 273, height: 39, left: 170, top: 477, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Murecho', fontWeight: '500', wordWrap: 'break-word' }}>Ratatouille Bio</div>
                    <img style={{ width: 614, height: 398, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="https://via.placeholder.com/614x398" />
               </div>
               <div style={{ width: 350, height: 382, left: 55, top: 2125, position: 'absolute' }}>
                    <div style={{ width: 336, height: 372, left: 7, top: 10, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                    <div style={{ width: 350, height: 369, left: 0, top: 9, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                    <div style={{ width: 83.10, height: 23.94, left: 109.86, top: 308.40, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Murecho', fontWeight: '500', wordWrap: 'break-word' }}>Coffee Jelly</div>
                    <img style={{ width: 350, height: 297, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="https://via.placeholder.com/350x297" />
               </div>
               <div style={{ width: 355, height: 382, left: 455, top: 2125, position: 'absolute' }}>
                    <div style={{ width: 341, height: 372, left: 7, top: 10, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                    <div style={{ width: 355, height: 369, left: 0, top: 9, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                    <div style={{ width: 83.10, height: 23.94, left: 109.86, top: 308.40, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Murecho', fontWeight: '500', wordWrap: 'break-word' }}>Coffee Jelly</div>
                    <div style={{ width: 355, height: 297, left: 0, top: 0, position: 'absolute', background: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                    <img style={{ width: 280, height: 210, left: 38, top: 44, position: 'absolute' }} src="https://via.placeholder.com/280x210" />
               </div>
               <div style={{ width: 365, height: 381, left: 855, top: 2125, position: 'absolute' }}>
                    <div style={{ width: 347, height: 379, left: 9, top: 2, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                    <div style={{ width: 365, height: 376, left: 0, top: 1, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                    <div style={{ width: 245.82, height: 49.75, left: 35.12, top: 314.97, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Murecho', fontWeight: '500', wordWrap: 'break-word' }}>Demon Slayer’s <br />Yamakake Udon</div>
                    <img style={{ width: 365, height: 297, left: 0, top: 0, position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} src="https://via.placeholder.com/365x297" />
               </div>
               
               <div style={{ height: 344, paddingRight: 42, left: 23, top: 2510, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ width: 1720, height: 344, position: 'relative' }}>
                         <div style={{ width: 1720, height: 299.58, paddingBottom: 37, paddingLeft: 21, paddingRight: 30, left: 0, top: 44.42, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                              <div style={{ width: 1669, height: 263, position: 'relative' }}>
                                   <div style={{ width: 213, height: 257, left: 245, top: 3, position: 'absolute' }}>
                                        <div style={{ width: 206, height: 256, left: 3, top: 1, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                                        <div style={{ width: 213, height: 254, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                                        <div style={{ width: 180, height: 37, left: 17, top: 214, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'New York', fontWeight: '674', wordWrap: 'break-word' }}>Princess and The Frog’s Beignets </div>
                                        <img style={{ width: 180, height: 183, left: 17, top: 15, position: 'absolute', borderRadius: 10 }} src="https://via.placeholder.com/180x183" />
                                   </div>
                                   <div style={{ width: 213, height: 257, left: 488, top: 4, position: 'absolute' }}>
                                        <div style={{ width: 206, height: 256, left: 3, top: 1, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                                        <div style={{ width: 213, height: 254, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                                        <div style={{ left: 58, top: 213, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'New York', fontWeight: '674', wordWrap: 'break-word' }}>Naruto’s Ramen</div>
                                        <img style={{ width: 180, height: 180, left: 17, top: 17, position: 'absolute', borderRadius: 10 }} src="https://via.placeholder.com/180x180" />
                                   </div>
                                   <div style={{ width: 213, height: 257, left: 731, top: 3, position: 'absolute' }}>
                                        <div style={{ width: 205, height: 256, left: 4, top: 1, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                                        <div style={{ width: 213, height: 254, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                                        <div style={{ left: 73, top: 213, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'New York', fontWeight: '674', wordWrap: 'break-word' }}>Ratatouille</div>
                                        <img style={{ width: 181, height: 181, left: 17, top: 16, position: 'absolute', borderRadius: 10 }} src="https://via.placeholder.com/181x181" />
                                   </div>
                                   <div style={{ width: 213, height: 257, left: 970, top: 3, position: 'absolute' }}>
                                        <div style={{ width: 204, height: 256, left: 5, top: 1, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                                        <div style={{ width: 213, height: 254, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                                        <div style={{ width: 164, left: 24, top: 213, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'New York', fontWeight: '674', wordWrap: 'break-word' }}>Coraline’s Welcome Home Cake</div>
                                        <img style={{ width: 181, height: 181, left: 17, top: 16, position: 'absolute', borderRadius: 10 }} src="https://via.placeholder.com/181x181" />
                                   </div>
                                   <div style={{ width: 213, height: 257, left: 1213, top: 3, position: 'absolute' }}>
                                        <div style={{ width: 207, height: 256, left: 3, top: 1, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                                        <div style={{ width: 213, height: 254, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                                        <div style={{ width: 168, left: 24, top: 213, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'New York', fontWeight: '674', wordWrap: 'break-word' }}>Spongebob Squarepants’ Goofy Goober Ice Cream</div>
                                        <img style={{ width: 181, height: 181, left: 17, top: 16, position: 'absolute', borderRadius: 10 }} src="https://via.placeholder.com/181x181" />
                                   </div>
                                   <div style={{ width: 213, height: 257, left: 1456, top: 5, position: 'absolute' }}>
                                        <div style={{ width: 203, height: 256, left: 5, top: 1, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                                        <div style={{ width: 213, height: 254, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                                        <div style={{ width: 168, left: 24, top: 215, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'New York', fontWeight: '674', wordWrap: 'break-word' }}>Demon Slayer’s Yamakake Udon</div>
                                        <img style={{ width: 182.75, height: 183, left: 16, top: 16, position: 'absolute', borderRadius: 10 }} src="https://via.placeholder.com/183x183" />
                                   </div>
                                   <div style={{ width: 215, height: 263, left: 0, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 209, height: 262, left: 3, top: 1, position: 'absolute', background: '#D9D9D9', boxShadow: '10px 10px 10px ', borderRadius: 10, filter: 'blur(10px)' }} />
                                        <div style={{ width: 215, height: 260, left: 0, top: 0, position: 'absolute', background: '#F6F1EB', borderRadius: 10 }} />
                                        <div style={{ width: 185, height: 26, left: 15, top: 216, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'New York', fontWeight: '674', wordWrap: 'break-word' }}>Spongebob Squarepants’ Krabby Patty</div>
                                        <img style={{ width: 185, height: 185, left: 15, top: 15, position: 'absolute', borderRadius: 10 }} src="https://via.placeholder.com/185x185" />
                                   </div>
                              </div>
                         </div>
                         <div style={{ width: 173.39, height: 26.20, left: 20.81, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'BIZ UDPMincho', fontWeight: '700', wordWrap: 'break-word' }}>Popular Dishes</div>
                    </div>
               </div>
          </div>
     )
}