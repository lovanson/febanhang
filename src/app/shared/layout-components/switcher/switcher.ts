import { fromEvent } from 'rxjs';

export function localStorageBackUp() {
  const html = document.querySelector('html')?.style;
  const body = document.querySelector('body');
  if (localStorage.getItem('Templisttransparent-primary-color') !== null) {
    body?.classList.add('light-theme');
    const light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    if(light){
      light.checked = true;
    }
    body?.classList.remove('dark-theme');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('Templisttransparent-primary-color')
    );
    html?.setProperty(
      '--primary-bg-hover',
      localStorage.getItem('Templisttransparent-primary-hover')
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('Templisttransparent-primary-border')
    );
  }
  if (localStorage.getItem('Templisttransparent-secondary-color') !== null) {
    body?.classList.add('light-theme');
    const light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    if(light){
      light.checked = true;
    }
    body?.classList.remove('dark-theme');
    html?.setProperty(
      '--secondary-color',
      localStorage.getItem('Templisttransparent-secondary-color')
    );
    html?.setProperty(
      '--secondary-hover',
      localStorage.getItem('Templisttransparent-secondary-hover')
    );
    html?.setProperty(
      '--secondary-transparent',
      localStorage.getItem('Templisttransparent-secondary-border')
    );
  }
  if (localStorage.getItem('Templistdark-primary-color') !== null) {
    body?.classList.add('dark-theme');
    const dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    dark.checked = true;
    body?.classList.remove('light-theme');
    html?.setProperty(
      '--primary-bg-color',
      localStorage.getItem('Templistdark-primary-color')
    );
    html?.setProperty(
      '--primary-bg-hover',
      localStorage.getItem('Templistdark-primary-hover')
    );
    html?.setProperty(
      '--primary-bg-border',
      localStorage.getItem('Templistdark-primary-border')
    );
  }
  if (localStorage.getItem('Templistdark-theme') !== null) {
    body?.classList.add('dark-theme');
    const dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    if (dark) {
      dark.checked = true;
    }

    body?.classList.remove('light-theme');
    // html?.setProperty(
    //   '--dark-body',
    //   localStorage.getItem('Templistdark-theme')
    // );
  }
  if (localStorage.getItem('TemplistlightTheme') !== null) {
    body?.classList.add('light-theme');
    const light = document.getElementById('myonoffswitch1') as HTMLInputElement;
    light.checked = true;
  }
  if (localStorage.getItem('TemplistdarkTheme') !== null) {
    body?.classList.add('dark-theme');
    const dark = document.getElementById('myonoffswitch2') as HTMLInputElement;
    if(dark){
      dark.checked = true;
    }
  }

  if (localStorage.getItem('Templisttransparent-bg-color') !== null) {
    const bodyColor = hexToRgba(localStorage.getItem('Templisttransparent-bg-color'), 0.9);
    const themeColor = hexToRgba(localStorage.getItem('Templisttransparent-bg-color'), 0.9);
    document.body.classList.add("dark-theme")
    html?.setProperty(
      '--dark-body',
      bodyColor
      );
      html?.setProperty(
        '--dark-theme',
        themeColor
        )
        const headerStyle = document.getElementById(
          'myonoffswitch6'
        ) as HTMLInputElement;
        if(headerStyle){
          headerStyle.checked = false
        }
        const menuStyle = document.getElementById(
          'myonoffswitch3'
        ) as HTMLInputElement;
        if(menuStyle){
          menuStyle.checked = false
        }
  }

  if (localStorage.getItem('Templistrtl')) {
    const rtl = document.getElementById('myonoffswitch55') as HTMLInputElement;
    if (rtl) {
      rtl.checked = true;
    }

    const styleId = document.querySelector('#style');
    document.querySelector('body')?.classList.add('rtl');
    document.querySelector('html')?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    // sidebarFn.checkHoriMenu();
  }
}

export function handleThemeUpdate(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue: any) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: any, chunkSize: any) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: any, alpha: any) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue: any, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function customClickFn() {
  const body: HTMLBodyElement | any = document.querySelector('body');
  const html: any = document.querySelector('html');
  const ltr: any = document.querySelectorAll('#myonoffswitch54');
  const rtl: any = document.querySelectorAll('#myonoffswitch55');
  const lightBtn: any = document.getElementById(
    'myonoffswitch1'
  ) as HTMLInputElement;
  const darkBtn: any = document.getElementById(
    'myonoffswitch2'
  ) as HTMLInputElement;
  const defaultMenu: any = document.querySelector('#myonoffswitch3');
  const MenuStyle1: any = document.querySelector('#myonoffswitch4');
  const MenuStyle2: any = document.querySelector('#myonoffswitch5');
  const defaultHeader: any = document.querySelector('#myonoffswitch6');
  const HeaderStyle2: any = document.querySelector('#myonoffswitch8');
  const HeaderStyle1: any = document.querySelector('#myonoffswitch7');

  const styleId = document.querySelector('#style');
  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.css'
    );
    //remove
    body?.classList.remove('rtl');
    // sidebarFn.checkHoriMenu();
    localStorage.setItem('Templistltr', 'true');
    localStorage.removeItem('Templistrtl');
  });
  // RTL
  fromEvent(rtl, 'click').subscribe(() => {
    //add
    body?.classList.add('rtl');
    html?.setAttribute('dir', 'rtl');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.rtl.css'
    );
    //remove
    body?.classList.remove('ltr');
    // sidebarFn.checkHoriMenu();
    localStorage.setItem('Templistrtl', 'true');
    localStorage.removeItem('Templistltr');
  });

  // Theme
  if (lightBtn) {
    fromEvent(lightBtn, 'click').subscribe(() => {
      localStorage.removeItem('Templisttransparent-primary-border');
      const defaultheader = document.getElementById(
        'myonoffswitch1'
      ) as HTMLInputElement;
      defaultheader.checked = true;
      const defaultMenu = document.getElementById(
        'myonoffswitch1'
      ) as HTMLInputElement;
      defaultMenu.checked = true;

      lightBtn.checked = true;
      // document.documentElement.style.setProperty(
      //   '--primary-bg-color',
      //   'var(--primary)'
      // );
      document.documentElement.style.setProperty(
        '--primary-2',
        'rgba(var(--primary),0.2)'
      );
      document.documentElement.style.setProperty(
        '--primary0',
        'var(--primary)'
      );
      // add
      document.querySelector('body')?.classList.add('light-theme');
      // remove
      document.querySelector('body')?.classList.remove('dark-theme');
      localStorage.setItem('Templistlight-theme', 'true');
      localStorage.removeItem('Templistdark-theme');
    });
  }

  if (darkBtn) {
    fromEvent(darkBtn, 'click').subscribe(() => {
      const HeaderStyle2 = document.getElementById(
        'myonoffswitch2'
      ) as HTMLInputElement;
      HeaderStyle2.checked = true;
      const darkmenu = document.getElementById(
        'myonoffswitch2'
      ) as HTMLInputElement;
      darkmenu.checked = true;

      darkBtn.checked = true;
      // document.documentElement.style.setProperty(
      //   '--primary-bg-color',
      //   'var(--primary)'
      // );
      document.documentElement.style.setProperty(
        '--primary-2',
        'rgba(var(--primary),0.2)'
      );
      document.documentElement.style.setProperty(
        '--primary0',
        'var(--primary)'
      );

      localStorage.removeItem('Templistlight-primary-border');
      // add
      document.querySelector('body')?.classList.add('dark-theme');
      // remove
      document.querySelector('body')?.classList.remove('light-theme');

      localStorage.setItem('Templistdark-theme', 'true');
      localStorage.removeItem('Templistlight-theme');
    });
  }

  // menu
  if (defaultMenu) {
    fromEvent(defaultMenu, 'click').subscribe(() => {
      body?.classList.add('default-menu');
      body?.classList.remove('menu-style1');
      body?.classList.remove('menu-style2');
    });
  }
  if (MenuStyle1) {
    fromEvent(MenuStyle1, 'click').subscribe(() => {
      body?.classList.add('menu-style1');
      body?.classList.remove('default-menu');
      body?.classList.remove('menu-style2');
    });
  }
  if (MenuStyle2) {
    fromEvent(MenuStyle2, 'click').subscribe(() => {
      body?.classList.add('menu-style2');
      body?.classList.remove('menu-style1');
      body?.classList.remove('default-menu');
    });
  }

  // header styles
  if (defaultHeader) {
    fromEvent(defaultHeader, 'click').subscribe(() => {
      body?.classList.add('headerstyle1');
      body?.classList.remove('headerstyle3');
      body?.classList.remove('headerstyle2');
    });
  }
  if (HeaderStyle1) {
    fromEvent(HeaderStyle1, 'click').subscribe(() => {
      body?.classList.add('headerstyle3');
      body?.classList.remove('headerstyle1');
      body?.classList.remove('headerstyle2');
    });
  }
  if (HeaderStyle2) {
    fromEvent(HeaderStyle2, 'click').subscribe(() => {
      body?.classList.add('headerstyle2');
      body?.classList.remove('headerstyle3');
      body?.classList.remove('headerstyle1');
    });
  }
}

export function checkOptions() {
  // default Header
  if (document.querySelector('body')?.classList.contains('default-header')) {
    const light = document.getElementById('myonoffswitch6') as HTMLInputElement;
    light.checked = true;
  }
  // color header
  if (document.querySelector('body')?.classList.contains('headerstyle3')) {
    const light = document.getElementById('myonoffswitch7') as HTMLInputElement;
    light.checked = true;
  }
  // dark header
  if (document.querySelector('body')?.classList.contains('headerstyle2')) {
    const light = document.getElementById('myonoffswitch8') as HTMLInputElement;
    light.checked = true;
  }

  // default menu
  if (document.querySelector('body')?.classList.contains('default-menu')) {
    const light = document.getElementById('myonoffswitch3') as HTMLInputElement;
    light.checked = true;
  }
  // color menu
  if (document.querySelector('body')?.classList.contains('menu-style2')) {
    const light = document.getElementById('myonoffswitch4') as HTMLInputElement;
    light.checked = true;
  }
  // dark menu
  if (document.querySelector('body')?.classList.contains('menu-style3')) {
    const light = document.getElementById('myonoffswitch5') as HTMLInputElement;
    light.checked = true;
  }
}

//////Bg Transparent  primary
export function dynamicBgPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    const cssPropName3 = `--primary-${item.getAttribute('data-id9')}`;

    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
      [cssPropName3]: hexToRgba(color),
    });
  });
}

//////Bg Transparent  primary
export function dynamicSecondaryColor(secondaryColor: any, color: any) {
  secondaryColor.forEach((item: any) => {
    const cssPropName1 = `--secondary-${item.getAttribute('data-id4')}`;
    const cssPropName2 = `--secondary-${item.getAttribute('data-id3')}`;
    const cssPropName3 = `--secondary-${item.getAttribute('data-id7')}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
      [cssPropName3]: hexToRgba(color),
    });
  });
}

///background dark
export function dynamicBgDarkPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--dark-${item.getAttribute('data-id5')}`;
    const cssPropName2 = `--dark-${item.getAttribute('data-id6')}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color, 0.9),
      [cssPropName2]: hexToRgba(color, 1.2),
    });
  });
}
let myVarVal;
export function updateChanges() {
  const primaryColorVal = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-bg-color')
    .trim();

  //get variable
  myVarVal =
    localStorage.getItem('Templistlight-primary-color') ||
    localStorage.getItem('Templistdark-primary-color') ||
    localStorage.getItem('Templisttransparent-primary-color') ||
    primaryColorVal;

  const colorData1 = hexToRgba(myVarVal, 0.1);
  document.querySelector('html')?.style.setProperty('--primary-1', colorData1);
  const colorData2 = hexToRgba(myVarVal, 0.2);
  document.querySelector('html')?.style.setProperty('--primary-2', colorData2);
  const colorData3 = hexToRgba(myVarVal, 0.3);
  document.querySelector('html')?.style.setProperty('--primary-3', colorData3);
  const colorData4 = hexToRgba(myVarVal, 0.3);
  document.querySelector('html')?.style.setProperty('--primary-4', colorData4);
  const colorData5 = hexToRgba(myVarVal, 0.3);
  document.querySelector('html')?.style.setProperty('--primary-5', colorData5);
  const colorData6 = hexToRgba(myVarVal, 0.6);
  document.querySelector('html')?.style.setProperty('--primary-6', colorData6);
  const colorData7 = hexToRgba(myVarVal, 0.3);
  document.querySelector('html')?.style.setProperty('--primary-7', colorData7);
  const colorData8 = hexToRgba(myVarVal, 0.6);
  document.querySelector('html')?.style.setProperty('--primary-8', colorData8);

  const colorData9 = hexToRgba(myVarVal, 0.7);
  document.querySelector('html')?.style.setProperty('--primary-9', colorData9);

  const secondaryColorVal = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-bg-color')
    .trim();

  //get variable
  myVarVal =
    localStorage.getItem('Templistlight-secondary-color') ||
    localStorage.getItem('Templistdark-secondary-color') ||
    localStorage.getItem('Templisttransparent-secondary-color') ||
    secondaryColorVal;

  const colorData10 = hexToRgba(myVarVal, 0.1);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-1', colorData10);
  const colorData11 = hexToRgba(myVarVal, 0.2);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-2', colorData11);
  const colorData12 = hexToRgba(myVarVal, 0.3);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-3', colorData12);
  const colorData13 = hexToRgba(myVarVal, 0.4);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-4', colorData13);
  const colorData14 = hexToRgba(myVarVal, 0.5);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-5', colorData14);
  const colorData15 = hexToRgba(myVarVal, 0.6);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-6', colorData15);
  const colorData16 = hexToRgba(myVarVal, 0.7);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-7', colorData16);
  const colorData17 = hexToRgba(myVarVal, 0.8);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-8', colorData17);

  const colorData18 = hexToRgba(myVarVal, 0.9);
  document
    .querySelector('html')
    ?.style.setProperty('--secondary-9', colorData18);
}
updateChanges();
