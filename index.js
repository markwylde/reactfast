(()=>{var U,u,G,be,E,$,R,ke,T={},z=[],xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var n in t)e[n]=t[n];return e}function Y(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var _,i,r,f={};for(r in t)r=="key"?_=t[r]:r=="ref"?i=t[r]:f[r]=t[r];if(arguments.length>2&&(f.children=arguments.length>3?U.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)f[r]===void 0&&(f[r]=e.defaultProps[r]);return S(e,f,_,i,null)}function S(e,t,n,_,i){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++G};return i==null&&u.vnode!=null&&u.vnode(r),r}function L(e){return e.children}function D(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?H(e):null}function J(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return J(e)}}function B(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!F.__r++||R!==u.debounceRendering)&&((R=u.debounceRendering)||$)(F)}function F(){for(var e;F.__r=E.length;)e=E.sort(function(t,n){return t.__v.__b-n.__v.__b}),E=[],e.some(function(t){var n,_,i,r,f,d;t.__d&&(f=(r=(n=t).__v).__e,(d=n.__P)&&(_=[],(i=C({},r)).__v=r.__v+1,I(d,r,i,n.__n,d.ownerSVGElement!==void 0,r.__h!=null?[f]:null,_,f??H(r),r.__h),Z(_,r),r.__e!=f&&J(r)))})}function K(e,t,n,_,i,r,f,d,p,h){var o,m,s,l,c,w,v,y=_&&_.__k||z,g=y.length;for(n.__k=[],o=0;o<t.length;o++)if((l=n.__k[o]=(l=t[o])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?S(null,l,null,null,l):Array.isArray(l)?S(L,{children:l},null,null,null):l.__b>0?S(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(s=y[o])===null||s&&l.key==s.key&&l.type===s.type)y[o]=void 0;else for(m=0;m<g;m++){if((s=y[m])&&l.key==s.key&&l.type===s.type){y[m]=void 0;break}s=null}I(e,l,s=s||T,i,r,f,d,p,h),c=l.__e,(m=l.ref)&&s.ref!=m&&(v||(v=[]),s.ref&&v.push(s.ref,null,l),v.push(m,l.__c||c,l)),c!=null?(w==null&&(w=c),typeof l.type=="function"&&l.__k===s.__k?l.__d=p=Q(l,p,e):p=X(e,l,s,y,c,p),typeof n.type=="function"&&(n.__d=p)):p&&s.__e==p&&p.parentNode!=e&&(p=H(s))}for(n.__e=w,o=g;o--;)y[o]!=null&&(typeof n.type=="function"&&y[o].__e!=null&&y[o].__e==n.__d&&(n.__d=H(_,o+1)),te(y[o],y[o]));if(v)for(o=0;o<v.length;o++)ee(v[o],v[++o],v[++o])}function Q(e,t,n){for(var _,i=e.__k,r=0;i&&r<i.length;r++)(_=i[r])&&(_.__=e,t=typeof _.type=="function"?Q(_,t,n):X(n,_,_,i,_.__e,t));return t}function X(e,t,n,_,i,r){var f,d,p;if(t.__d!==void 0)f=t.__d,t.__d=void 0;else if(n==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),f=null;else{for(d=r,p=0;(d=d.nextSibling)&&p<_.length;p+=2)if(d==i)break e;e.insertBefore(i,r),f=r}return f!==void 0?f:i.nextSibling}function Ce(e,t,n,_,i){var r;for(r in n)r==="children"||r==="key"||r in t||N(e,r,null,n[r],_);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||N(e,r,t[r],n[r],_)}function q(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||xe.test(t)?n:n+"px"}function N(e,t,n,_,i){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||q(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||q(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?j:V,r):e.removeEventListener(t,r?j:V,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function V(e){this.l[e.type+!1](u.event?u.event(e):e)}function j(e){this.l[e.type+!0](u.event?u.event(e):e)}function I(e,t,n,_,i,r,f,d,p){var h,o,m,s,l,c,w,v,y,g,P,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,d=t.__e=n.__e,t.__h=null,r=[d]),(h=u.__b)&&h(t);try{e:if(typeof k=="function"){if(v=t.props,y=(h=k.contextType)&&_[h.__c],g=h?y?y.props.value:h.__:_,n.__c?w=(o=t.__c=n.__c).__=o.__E:("prototype"in k&&k.prototype.render?t.__c=o=new k(v,g):(t.__c=o=new D(v,g),o.constructor=k,o.render=He),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=g,o.__n=_,m=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=C({},o.__s)),C(o.__s,k.getDerivedStateFromProps(v,o.__s))),s=o.props,l=o.state,m)k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==s&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,g)===!1||t.__v===n.__v){o.props=v,o.state=o.__s,t.__v!==n.__v&&(o.__d=!1),o.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(A){A&&(A.__=t)}),o.__h.length&&f.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(s,l,c)})}o.context=g,o.props=v,o.state=o.__s,(h=u.__r)&&h(t),o.__d=!1,o.__v=t,o.__P=e,h=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(_=C(C({},_),o.getChildContext())),m||o.getSnapshotBeforeUpdate==null||(c=o.getSnapshotBeforeUpdate(s,l)),P=h!=null&&h.type===L&&h.key==null?h.props.children:h,K(e,Array.isArray(P)?P:[P],t,n,_,i,r,f,d,p),o.base=t.__e,t.__h=null,o.__h.length&&f.push(o),w&&(o.__E=o.__=null),o.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=we(n.__e,t,n,_,i,r,f,p);(h=u.diffed)&&h(t)}catch(A){t.__v=null,(p||r!=null)&&(t.__e=d,t.__h=!!p,r[r.indexOf(d)]=null),u.__e(A,t,n)}}function Z(e,t){u.__c&&u.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){u.__e(_,n.__v)}})}function we(e,t,n,_,i,r,f,d){var p,h,o,m=n.props,s=t.props,l=t.type,c=0;if(l==="svg"&&(i=!0),r!=null){for(;c<r.length;c++)if((p=r[c])&&"setAttribute"in p==!!l&&(l?p.localName===l:p.nodeType===3)){e=p,r[c]=null;break}}if(e==null){if(l===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,s.is&&s),r=null,d=!1}if(l===null)m===s||d&&e.data===s||(e.data=s);else{if(r=r&&U.call(e.childNodes),h=(m=n.props||T).dangerouslySetInnerHTML,o=s.dangerouslySetInnerHTML,!d){if(r!=null)for(m={},c=0;c<e.attributes.length;c++)m[e.attributes[c].name]=e.attributes[c].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(Ce(e,s,m,i,d),o)t.__k=[];else if(c=t.props.children,K(e,Array.isArray(c)?c:[c],t,n,_,i&&l!=="foreignObject",r,f,r?r[0]:n.__k&&H(n,0),d),r!=null)for(c=r.length;c--;)r[c]!=null&&Y(r[c]);d||("value"in s&&(c=s.value)!==void 0&&(c!==m.value||c!==e.value||l==="progress"&&!c)&&N(e,"value",c,m.value,!1),"checked"in s&&(c=s.checked)!==void 0&&c!==e.checked&&N(e,"checked",c,m.checked,!1))}return e}function ee(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){u.__e(_,n)}}function te(e,t,n){var _,i;if(u.unmount&&u.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||ee(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){u.__e(r,t)}_.base=_.__P=null}if(_=e.__k)for(i=0;i<_.length;i++)_[i]&&te(_[i],t,typeof e.type!="function");n||e.__e==null||Y(e.__e),e.__e=e.__d=void 0}function He(e,t,n){return this.constructor(e,n)}function ne(e,t,n){var _,i,r;u.__&&u.__(e,t),i=(_=typeof n=="function")?null:n&&n.__k||t.__k,r=[],I(t,e=(!_&&n||t).__k=a(L,null,[e]),i||T,T,t.ownerSVGElement!==void 0,!_&&n?[n]:i?null:t.firstChild?U.call(t.childNodes):null,r,!_&&n?n:i?i.__e:t.firstChild,_),Z(r,e)}U=z.slice,u={__e:function(e,t){for(var n,_,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&_.getDerivedStateFromError!=null&&(n.setState(_.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(r){e=r}throw e}},G=0,be=function(e){return e!=null&&e.constructor===void 0},D.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),B(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),B(this))},D.prototype.render=L,E=[],$=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F.__r=0,ke=0;function Ee(){return a("div",{className:"header"},a("span",null,"ReactFast"),a("nav",null,a("ul",null,a("li",null,a("a",{href:"/"},"Home")),a("li",null,a("a",{href:"/seo"},"Seo")),a("li",null,a("a",{href:"/about"},"About")),a("li",null,a("a",{href:"/not-found"},"Not Found Page")),a("li",null,a("a",{href:"/dynamic"},"Dynamic")))))}var x=Ee;function Pe(){return a("div",null,a(x,null),a("h1",null,"What's this all about then?"),a("p",null,"This is an example of a small, lightweight, fast React project that doesn't need to be server rendered."))}var oe=Pe;function Ae(){return a("div",null,a(x,null),a("h1",null,"How does SEO work?"),a("p",null,"Yeah, SEO is fine with this app. But you need to make sure you use a host/cdn that is capabile of always returning an index.html page with 200 status."))}var re=Ae;function Se(){return a("div",null,a(x,null),a("h1",null,"About this site"),a("p",null,"I believe that we can build amazing, fast, lightweight websites using entirely client rendered code, without any server side rendering."),a("p",null,"This is a demonstration of a site that is search engine optimised, will be indexed well by Google, and score highly in the lighthouse and core web vital tests."),a("p",null,"In many cases your site will score higher than with server rendering, because you can host the entire thing on a CDN."))}var _e=Se;var pe,b,ie,M=0,de=[],ae=u.__b,le=u.__r,ue=u.diffed,se=u.__c,ce=u.unmount;function De(e,t){u.__h&&u.__h(b,e,M||t),M=0;var n=b.__H||(b.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function he(e){return M=1,Te(me,e)}function Te(e,t,n){var _=De(pe++,2);return _.t=e,_.__c||(_.__=[n?n(t):me(void 0,t),function(i){var r=_.t(_.__[0],i);_.__[0]!==r&&(_.__=[r,_.__[1]],_.__c.setState({}))}],_.__c=b),_.__}function Fe(){for(var e;e=de.shift();)if(e.__P)try{e.__H.__h.forEach(O),e.__H.__h.forEach(W),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){b=null,ae&&ae(e)},u.__r=function(e){le&&le(e),pe=0;var t=(b=e.__c).__H;t&&(t.__h.forEach(O),t.__h.forEach(W),t.__h=[])},u.diffed=function(e){ue&&ue(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(de.push(t)!==1&&ie===u.requestAnimationFrame||((ie=u.requestAnimationFrame)||function(n){var _,i=function(){clearTimeout(r),fe&&cancelAnimationFrame(_),setTimeout(n)},r=setTimeout(i,100);fe&&(_=requestAnimationFrame(i))})(Fe)),b=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(O),n.__h=n.__h.filter(function(_){return!_.__||W(_)})}catch(_){t.some(function(i){i.__h&&(i.__h=[])}),t=[],u.__e(_,n.__v)}}),se&&se(e,t)},u.unmount=function(e){ce&&ce(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{O(_)}catch(i){t=i}}),t&&u.__e(t,n.__v))};var fe=typeof requestAnimationFrame=="function";function O(e){var t=b,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),b=t}function W(e){var t=b;e.__c=e.__(),b=t}function me(e,t){return typeof t=="function"?t(e):t}function Ne(){let[e,t]=he(["first item"]),n=()=>{t([...e,"second item"])};return a("div",null,a(x,null),a("h1",null,"Does it handle interactivity?"),a("div",null,"Items:"),a("ul",null,e.map((_,i)=>a("li",{key:i},_))),a("button",{onClick:n},"Add Item"))}var ve=Ne;function Ue(){let e=document.createElement("meta");return e.name="robots",e.content="noindex",document.head.append(e),a("div",null,a(x,null),a("h1",null,"Page Not Found"),a("p",null,"The page you are trying to access could not be found."),a("h2",null,"Curious about SEO?"),a("p",null,"This page (like every page on the site) is returned from the server with a 200 status code. But, this isn't exactly great for SEO."),a("p",null,"But never fear. There is a ",a("code",null,"meta")," tag on this page to set ",a("code",null,"robots")," to ",a("code",null,"noindex"),". This means Google, and other compliant search engines, will not index this page."))}var ye=Ue;function Le(){return window.location.pathname==="/"?a(oe,null):window.location.pathname==="/seo"?a(re,null):window.location.pathname==="/about"?a(_e,null):window.location.pathname==="/dynamic"?a(ve,null):a(ye,null)}var ge=Le;document.addEventListener("DOMContentLoaded",function(){let e=document.body.children[0];ne(a(ge,null),e),document.title="ReactFast"});})();
