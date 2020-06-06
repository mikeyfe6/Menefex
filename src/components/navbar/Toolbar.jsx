/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../logo/Gimmix-logo.svg';
import DrawerToggleButton from './DrawerToggleButton';

import headLogo from '../../styles/modules/headLogo.module.scss';
import headerDesign from '../../styles/modules/toolbar.module.scss';

// TODO: Animations & dergelijke toepassen

const toolbar = (props) => (
  <header className={headerDesign.toolbar}>
    <nav className={headerDesign.toolbar__navigation}>
      <div className={headerDesign.toolbar__toggleButton}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={headerDesign.spacerTwo} />
      <div>
        <Link to="/">
          <img className={headLogo.logo} src={logo} alt="Gimmix Logo" />
        </Link>
      </div>
      <div className={headerDesign.spacer} />
      <div className={headerDesign.toolbar_navigationItems}>
        <ul>
          <li>
            <Link to="/" activeClassName={headerDesign.activePage}>
              home
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/work/" activeClassName={headerDesign.activePage}>
              portfolio
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog/"
              activeClassName={headerDesign.activePage}
              partiallyActive
            >
              blog
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/prices/" activeClassName={headerDesign.activePage}>
              prices
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/about/" activeClassName={headerDesign.activePage}>
              about
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={headerDesign.activePage}>
              contact
              <span className={headerDesign.dots}>.</span>
            </Link>
          </li>
          <li>
            <a href="https://wa.me/31611054318">
              <FontAwesomeIcon
                icon={['fab', 'whatsapp']}
                size="2x"
                color="#656565"
                className={headerDesign.whapp}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="clr" />
  </header>
);

export default toolbar;

// const data = useStaticQuery(graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)

/* <Link className={headerDesign.title} to="/">
        {data.site.siteMetadata.title}
      </Link> */

// constructor(props) {
//   super(props);

//   this.toggle = this.toggle.bind(this);

//   this.state = {
//     on: false,
//   };
// }

// toggle = () => {
//   this.setState({
//     on: !this.state.on,
//   });
//   // console.log('aaah');
// };

// render() {
//   return (
//     <header>
//       <nav id={menuDesign.topnavbar}>
//         <div id={menuDesign.brand}>
//           <Link to='/'>
//             <img className={headerLogo.logo} src={logo} alt='Gimmix Logo' />
//           </Link>
//         </div>

//         <ul id={menuDesign.menu}>
//           <li>
//             <Link
//               to='/'
//               activeClassName={menuDesign.activePage}
//               className={menuDesign.underline}>
//               home
//               <span className={menuDesign.dots}>.</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to='/work'
//               activeClassName={menuDesign.activePage}
//               className={menuDesign.underline}>
//               work
//               <span className={menuDesign.dots}>.</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to='/blog'
//               activeClassName={menuDesign.activePage}
//               className={menuDesign.underline}
//               partiallyActive>
//               blog
//               <span className={menuDesign.dots}>.</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to='/about'
//               activeClassName={menuDesign.activePage}
//               className={menuDesign.underline}>
//               about
//               <span className={menuDesign.dots}>.</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to='/contact'
//               activeClassName={menuDesign.activePage}
//               className={menuDesign.underline}>
//               contact
//               <span className={menuDesign.dots}>.</span>
//             </Link>
//           </li>
//           <li>
//             <a
//               href='https://api.whatsapp.com/send?phone=0031628213134'
//               rel='noopener noreferrer'
//               target='_blank'>
//               <FontAwesomeIcon
//                 icon={['fab', 'whatsapp']}
//                 size='2x'
//                 color='#656565'
//                 className={menuDesign.whapp}
//               />
//             </a>
//           </li>
//         </ul>

//         <div
//           id={menuDesign.toggle}
//           onKeyPress={this.toggle}
//           role='button'
//           tabIndex='0'
//           onClick={this.toggle}>
//           <div className={menuDesign.span}>menu</div>
//         </div>
//       </nav>{' '}
//       {this.state.on && (
//         <div id={menuDesign.resize}>
//           <div className={menuDesign.closeBtn}>close</div>

//           <ul id={menuDesign.menu}>
//             <li>
//               <Link to='/'>
//                 home
//                 <span className={menuDesign.dots}>.</span>
//               </Link>
//             </li>
//             <li>
//               <Link to='/work'>
//                 work
//                 <span className={menuDesign.dots}>.</span>
//               </Link>
//             </li>
//             <li>
//               <Link to='/blog'>
//                 blog
//                 <span className={menuDesign.dots}>.</span>
//               </Link>
//             </li>
//             <li>
//               <Link to='/about'>
//                 about
//                 <span className={menuDesign.dots}>.</span>
//               </Link>
//             </li>
//             <li>
//               <Link to='/contact'>
//                 contact
//                 <span className={menuDesign.dots}>.</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//       <div className='clr' />
//     </header>
//   );
// }
