(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],[,,,,,,,,,function(e,t,r){e.exports=r(23)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var a,n,o,i=r(0),s=r.n(i),l=r(7),c=r.n(l),u=(r(14),r(1)),f=r(2),v=r(4),h=r(3),m=(r(15),r(16),function(e){Object(v.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={iModify:-1,jModify:-1,modifyMatrix:!0},e.setTrash=function(e){if("trashContainer"===e.target.className||"TrashText"===e.target.id){console.log(e.target.id),o=!0;var t=document.getElementsByClassName("trashContainer")[0];t.style.border="solid 8px rgba(170,100,105,0.9)",t.style.backgroundColor="rgba(255,205,215,1)";var r=document.getElementsByClassName("dragSection")[0];t.style.color="rgba(170,100,105,0.9)",r.style.color="rgba(170,100,105,0.9)"}else o=!1},e.setTrashToNormal=function(e){if("trashContainer"===e.target.className||"TrashText"===e.target.id){var t=document.getElementsByClassName("trashContainer")[0],r=document.getElementsByClassName("dragSection")[0];t.style.border="solid 3px rgba(105,225,185,1)",t.style.backgroundColor="rgba(205,255,215,0.7)",t.style.color="rgba(120,200,125)",r.style.color="rgba(120,200,125)"}},e.handleDragStart=function(e){a=e.target.id[0],n=e.target.id[2];var t=document.getElementsByClassName("trashContainer")[0],r=document.getElementsByClassName("dragSection")[0];t.style.transitionDuration="0.2s",t.style.fontSize="2vw",t.style.fontWeight="bold",r.style.fontSize="1vw",r.style.fontWeight="normal"},e.handleDrag=function(){document.addEventListener("dragenter",e.setTrash),document.addEventListener("dragleave",e.setTrashToNormal)},e.handleDragEnd=function(){document.removeEventListener("dragenter",e.setTrash);var t=document.getElementsByClassName("trashContainer")[0];t.style.fontSize="1vw",t.style.fontWeight="normal",setTimeout((function(){t.style.transitionDuration=null}),500),o&&e.props.changeMatrix(a,n,0)},e}return Object(f.a)(r,[{key:"render",value:function(){for(var e=this,t=[],r=this.props.iRange[0],a=this.props.iRange[1],n=this.props.jRange[0],o=this.props.jRange[1],i={gridTemplateColumns:"5vh",gridTemplateRows:"5vh",marginLeft:"1.9vh",marginTop:"0.6vh",fontSize:"4.5vh"},l=function(r){for(var a=function(a){if((u=e.props.matrix[r][a])>0&&"number"===typeof u){var n=s.a.createElement("div",{key:10*r+a,className:"filled-grid-item",id:[r,a],draggable:"true",onDragStart:e.handleDragStart,onDrag:e.handleDrag,onDragEnd:e.handleDragEnd},s.a.createElement("h1",{className:"certain-number",style:i},e.props.matrix[r][a]));t.push(n)}else if(0===u&&"number"===typeof u){var o=s.a.createElement("div",{key:10*r+a,className:"grid-item",id:[r,a],draggable:"true",onDragStart:e.handleDragStart,onDrag:e.handleDrag,onDragEnd:e.handleDragEnd});t.push(o)}else{var l=s.a.createElement("div",{key:10*r+a,className:"grid-item",id:[r,a],draggable:"false"},u.map((function(e,t){return s.a.createElement("h1",{key:100*r+10*a+t,className:"uncertain-number"}," ",e," ")})));t.push(l)}},l=n;l<o+1;l++)a(l)},c=r;c<a+1;c++){var u;l(c)}return s.a.createElement("div",{className:"grid-container"},t)}}]),r}(i.Component)),g=(r(17),function(e){Object(v.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(f.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{className:"grid"},s.a.createElement("div",{className:"grid-container"},s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[0,2],jRange:[0,2]}),s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[0,2],jRange:[3,5]}),s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[0,2],jRange:[6,8]}),s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[3,5],jRange:[0,2]}),s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[3,5],jRange:[3,5]}),s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[3,5],jRange:[6,8]}),s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[6,8],jRange:[0,2]}),s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[6,8],jRange:[3,5]}),s.a.createElement(m,{changeMatrix:this.props.changeMatrix,matrix:this.props.matrix,iRange:[6,8],jRange:[6,8]})))}}]),r}(i.Component)),d=(r(18),r(5));function p(e,t,r,a){for(var n=0;n<9;n++){var o=3*Math.floor(t/3)+Math.floor(n/3),i=3*Math.floor(r/3)+n%3;if(e[t][n]===a||e[n][r]===a||e[o][i]===a)return!1}return!0}function b(e,t){for(var r=0;r<9;r++)for(var a=0;a<9;a++)if(0==e[r][a]){for(var n=1;n<=9;n++)if(p(e,r,a,n)){e[r][a]=n;var o=y(e);if(t.push(o),b(e,t))return!0;e[r][a]=0;var i=y(e);t.push(i)}return!1}return!0}function y(e){for(var t=[],r=0;r<9;r++){var a=Object(d.a)(e[r]);t.push(a)}return t}function x(e,t,r){for(var a=[],n=1;n<10;n++)p(r,e,t,n)&&a.push(n);return a}function E(e){for(var t=e,r=0;r<9;r++)for(var a=0;a<9;a++)if(0==t[r][a]||"object"===typeof t[r][a]){var n=x(r,a,e);t[r][a]=n}return t}var N=[1,2,3,4,5,6,7,8,9],M=0,j=[-1,-1],S=!1,k=!1,C=function(e){Object(v.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).setGrid=function(e){"grid-item"===e.target.className||"uncertain-number"===e.target.className?(S=!0,k=!1,"grid-item"===e.target.className&&(j=[Number(e.target.id[0]),Number(e.target.id[2])],e.target.style.backgroundColor="rgba(150,230,250)",e.target.style.border="1vh solid rgba(60,110,150,1)",e.target.style.color="rgba(150,230,250)")):"trashContainer"===e.target.className?(k=!0,S=!1):(S=!1,k=!1)},e.setGridToNormal=function(e){"grid-item"===e.target.className&&(e.target.style.backgroundColor="rgba(200,245,255,1)",e.target.style.border="0.08vh solid rgba(60,110,150,1)",e.target.style.color="lightpink")},e.handleDrag=function(t){document.addEventListener("dragenter",e.setGrid),document.addEventListener("dragleave",e.setGridToNormal)},e.handleDragEnd=function(t){if(document.removeEventListener("dragenter",e.setGrid),document.removeEventListener("dragleave",e.setGridToNormal),S){var r=j[0],a=j[1];p(e.props.matrix,r,a,M)&&e.props.changeMatrix(r,a,M)}else k&&alert("Nice try! But you cannot remove the keyBoard! ;)")},e.changeNumber=function(e){M=e},e}return Object(f.a)(r,[{key:"render",value:function(){var e=this;return s.a.createElement("footer",{className:"DndStyle"},N.map((function(t){return s.a.createElement("div",{className:"Key",draggable:!0,key:t,onDragStart:e.handleDrag,onDragEnd:e.handleDragEnd,onMouseOver:function(){return e.changeNumber(t)}}," ",t)})))}}]),r}(i.Component);function w(e,t,r,a){for(var n=0;n<9;n++){var o=3*Math.floor(t/3)+Math.floor(n/3),i=3*Math.floor(r/3)+n%3;if(e[t][n]===a||e[n][r]===a||e[o][i]===a)return!1}return!0}function O(e,t,r,a,n){for(var o=0;o<9;o++)if("object"===typeof a[o][t])for(var i=a[o][t],s=0;s<i.length;s++){if(i[s]===r){i.splice(s,1);var l=G(a);n.push(l)}}for(var c=0;c<9;c++)if("object"===typeof a[e][c])for(var u=a[e][c],f=0;f<u.length;f++){if(u[f]===r){u.splice(f,1);var v=G(a);n.push(v)}}for(var h=e-e%3,m=t-t%3,g=h;g<h+3;g++)for(var d=m;d<m+3;d++){a[g][d];for(var p=a[g][d],b=0;b<p.length;b++){if(p[b]===r){p.splice(b,1);var y=G(a);n.push(y)}}}}function D(e,t){var r=0,a=0,n=e.length,o=t.length;if(o>n)return!1;for(;a<o&&r<n;){if(t[a]<e[r])return!1;t[a]>e[r]?r++:(r++,a++)}return a===o}function T(e,t){var r=!1;if("number"===typeof e)return!1;for(var a=[],n=0,o=0,i=e.length,s=t.length;o<s&&n<i;)t[o]<e[n]?o++:t[o]>e[n]?n++:(r=!0,a.push(n),n++,o++);if(a.length)for(var l=0,c=0;c<a.length;c++){var u=a[c];e.splice(u-l,1),l++}return r}function B(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return void e.splice(r,1)}function R(e,t){for(var r=0;r<e.length;r++){if(D(t,e[r]))return void e.splice(r,1)}}function A(e){for(var t=[],r=0;r<e;r++)t.push(r);return t}function G(e){var t=[];if("object"!==typeof e)return e;for(var r=0;r<e.length;r++){var a=G(e[r]);t.push(a)}return t}function V(e,t){for(var r=[],a=0;a<9;a++)for(var n=0;n<9;n++)0===e[a][n]&&r.push([a,n]);if(0===r.length)return!0;for(var o=[-1,-1],i=9,s=0;s<r.length;s++){for(var l=r[s][0],c=r[s][1],u=0,f=1;f<10;f++)w(e,l,c,f)&&u++;u<i&&(o=[l,c],i=u)}for(var v=o[0],h=o[1],m=1;m<10;m++)if(w(e,v,h,m)){e[v][h]=m;var g=G(e);if(t.push(g),V(e,t))return!0;e[v][h]=0;var d=G(e);t.push(d)}return!1}function H(e){for(var t=L(e.length/81),r=function(){for(var e=[],t=0;t<9;t++)e.push([0,0,0,0,0,0,0,0,0]);return e}(),a=0;a<9;a++)for(var n=0;n<9;n++)r[a][n]=parseInt(e[81*t+9*a+n]);for(var o=[],i=0;i<9;i++)for(var s=0;s<9;s++)r[i][s]>0&&o.push([i,s]);for(var l=[function(){for(var e=[],t=0;t<9;t++)e.push([1,4,3,2,2,5,3,9,2]);return e}()],c=0;c<20;c++){for(var u=z(l[l.length-1]),f=0;f<9;f++)for(var v=0;v<9;v++)P([f,v],o)?u[f][v]=L(9)+1:u[f][v]>0&&(u[f][v]=L(9));l.push(u)}return l.push(r),l}function L(e){return Math.floor(e*Math.random())}function P(e,t){for(var r=0;r<t.length;r++)if(a=e,n=t[r],a[0]===n[0]&&a[1]===n[1])return!0;var a,n;return!1}function z(e){for(var t=[],r=0;r<9;r++){var a=Object(d.a)(e[r]);t.push(a)}return t}r(19);function W(e,t){for(var r=!1,a=0;a<9;a++)I(a,e,t)&&(r=!0),J(a,e,t)&&(r=!0),X(a,e,t)&&(r=!0);return r}function I(e,t,r){for(var a=!1,n={},o={},i=0;i<9;i++)if("object"===typeof t[e][i]){var s=t[e][i].toString();o[s]=0,n[s]=[]}for(var l=0;l<9;l++)if("object"===typeof t[e][l]){var c=t[e][l].toString();o[c]++,n[c].push(l)}for(var u in o){var f=u.length-Math.floor(u.length/2);if(o[u]===f){var v=A(9);T(v,n[u]);for(var h=t[e][n[u][0]],m=0;m<v.length;m++){var g=v[m];if(T(t[e][g],h)){a=!0;var d=G(t);r.push(d)}}}}return a}function J(e,t,r){for(var a=!1,n={},o={},i=0;i<9;i++)if("object"===typeof t[i][e]){var s=t[i][e].toString();o[s]=0,n[s]=[]}for(var l=0;l<9;l++)if("object"===typeof t[l][e]){var c=t[l][e].toString();o[c]++,n[c].push(l)}for(var u in o){var f=u.length-Math.floor(u.length/2);if(o[u]===f){var v=A(9);T(v,n[u]);for(var h=t[n[u][0]][e],m=0;m<v.length;m++){if(T(t[v[m]][e],h)){a=!0;var g=G(t);r.push(g)}}}}return a}function X(e,t,r){for(var a=!1,n={},o={},i=3*Math.floor(e/3),s=3*Math.floor(e%3),l=i;l<i+3;l++)for(var c=s;c<s+3;c++){var u=t[l][c].toString();n[u]=0,o[u]=[]}for(var f=i;f<i+3;f++)for(var v=s;v<s+3;v++){var h=t[f][v].toString();n[h]++,o[h].push([f,v])}for(var m in n){var g=m.length-Math.floor(m.length/2);if(n[m]===g){for(var d=[],p=o[m][0],b=i;b<i+3;b++)for(var y=s;y<s+3;y++)d.push([b,y]);for(var x=0;x<o[m].length;x++){R(d,o[m][x])}for(var E=t[p[0]][p[1]],N=0;N<d.length;N++){var M=d[N];if(T(t[M[0]][M[1]],E)){var j=G(t);r.push(j),a=!0}}}}return a}function Y(e,t){for(var r=!1,a=0;a<9;a++)q(a,e,t)&&(r=!0),K(a,e,t)&&(r=!0),U(a,e,t)&&(r=!0);return r}function q(e,t,r){for(var a=!1,n=0;n<9;n++){for(var o=[],i=0;i<9;i++)n!=i&&o.push(i);if("object"===typeof t[e][n]){for(var s=t[e][n],l=s.length-1,c=0;c<9;c++){if(c!=n&&"object"===typeof t[e][c])D(s,t[e][c])&&(l--,B(o,c))}if(0===l)for(var u=0;u<o.length;u++){var f=o[u];if(T(t[e][f],s)){var v=G(t);r.push(v),a=!0}}}}return a}function K(e,t,r){for(var a=!1,n=0;n<9;n++){for(var o=[],i=0;i<9;i++)n!=i&&o.push(i);if("object"===typeof t[n][e]){for(var s=t[n][e],l=s.length-1,c=0;c<9;c++){if(c!=n&&"object"===typeof t[c][e])D(s,t[c][e])&&(l--,B(o,c))}if(0===l)for(var u=0;u<o.length;u++){if(T(t[o[u]][e],s)){var f=G(t);r.push(f),a=!0}}}}return a}function U(e,t,r){for(var a=!1,n=3*Math.floor(e/3),o=e%3*3,i=n;i<n+3;i++)for(var s=o;s<o+3;s++){for(var l=[],c=n;c<n+3;c++)for(var u=o;u<o+3;u++)l.push([c,u]);if("object"===typeof t[i][s]){for(var f=t[i][s],v=f.length,h=n;h<n+3;h++)for(var m=o;m<o+3;m++){if("object"===typeof t[h][m])D(f,t[h][m])&&(v--,R(l,[h,m]))}if(0===v)for(var g=0;g<l.length;g++){var d=l[g][0],p=l[g][1];if(T(t[d][p],f)){var b=G(t);r.push(b),a=!0}}}}return a}function $(e,t){for(var r=!1,a=0;a<9;a++)F(a,e,t)&&(r=!0),Q(a,e,t)&&(r=!0),Z(a,e,t)&&(r=!0);return r}function F(e,t,r){for(var a=!1,n={},o={},i=1;i<10;i++)n[i]=0,o[i]=[];for(var s=0;s<9;s++)if("object"===typeof t[e][s])for(var l=t[e][s],c=0;c<l.length;c++){var u=l[c];n[u]++,o[u]=s}for(var f=1;f<10;f++){if(1===n[f])if(t[e][o[f]].length>1){t[e][o[f]]=[f];var v=G(t);r.push(v),a=!0}}return a}function Q(e,t,r){for(var a=!1,n={},o={},i=1;i<10;i++)n[i]=0,o[i]=[];for(var s=0;s<9;s++)if("object"===typeof t[s][e])for(var l=t[s][e],c=0;c<l.length;c++){var u=l[c];n[u]++,o[u]=s}for(var f=1;f<10;f++){if(1===n[f])if(t[o[f]][e].length>1){t[o[f]][e]=[f];var v=G(t);r.push(v),a=!0}}return a}function Z(e,t,r){for(var a=!1,n={},o={},i=3*Math.floor(e/3),s=e%3*3,l=1;l<10;l++)n[l]=0,o[l]=[];for(var c=i;c<i+3;c++)for(var u=s;u<s+3;u++)if("object"===typeof t[c][u])for(var f=t[c][u],v=0;v<f.length;v++){var h=f[v];n[h]++,o[h]=[c,u]}for(var m=1;m<10;m++)if(1===n[m]){var g=o[m][0],d=o[m][1];if(t[g][d].length>1){t[g][d]=[m];var p=G(t);r.push(p),a=!0}}return a}function _(e,t){!function(e,t){for(var r=!0;r;)r=!!$(e,t),r=!!W(e,t),r=!!Y(e,t)}(e,t);for(var r=10,a=[],n=0;n<9;n++)for(var o=0;o<9;o++)"object"===typeof e[n][o]&&e[n][o].length<r&&(r=e[n][o].length,a=[n,o]);if(10===r)return!0;for(var i=a[0],s=a[1],l=e[i][s],c=0;c<l.length;c++){var u=l[c],f=G(e);f[i][s]=u,t.push(f);var v=G(f);if(O(i,s,u,v,t),_(v,t))return!0;var h=G(f);t.push(h);var m=G(e);t.push(m)}return!1}var ee,te,re,ae,ne,oe,ie=function(e){Object(v.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).useClassicBacktrack=function(){e.props.setSolver(b,"my-red-animation",0)},e.useGreedyBacktrack=function(){e.props.setSolver(V,"my-orange-animation",1)},e.useTwoStageAlgo=function(){e.props.setSolver(_,"my-green-animation",2)},e}return Object(f.a)(r,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"dropdown"},s.a.createElement("div",{className:"projects"},s.a.createElement("button",{className:"dropdown-style"},this.props.children,s.a.createElement("img",{src:"/dropdown-icon.jpg",height:"15px",width:"15px"})),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("div",{className:"danger-button",onMouseOver:this.useClassicBacktrack}," Backtracking ")),s.a.createElement("li",null,s.a.createElement("div",{className:"mean-button",onMouseOver:this.useGreedyBacktrack}," Greedy Backtrack ")),s.a.createElement("li",null,s.a.createElement("div",{className:"success-button",onMouseOver:this.useTwoStageAlgo}," Heuristic + Backtrack  "))))))}}]),r}(i.Component),se=(r(20),function(e){Object(v.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={matrices:"",animation:"my-red-animation",solver:b,label:1,showHelp:!1,solved:!1},e.actionAnimation=function(t,r,a,n){setTimeout((function(){for(var a=function(a){setTimeout((function(){e.props.setMatrix(t[a])}),a*r+n*Math.pow(a,2))},o=0;o<t.length;o++)a(o)}),a)},e.setSolver=function(t,r,a){e.setState({solver:t,animation:r,label:a,solveButtonMsg:"solve"})},e.solveTheGrid=function(){var t=[],r=0;e.state.solved?(e.props.setMatrix(G(e.props.data.prevMatrix)),e.setState({solved:!1})):(e.setState({solved:!0}),(2===e.state.label&&!1===e.props.data.validNumbers||e.state.label<2&&!0===e.props.data.validNumbers)&&(e.printValidNumbers(),r=1250),setTimeout((function(){e.state.solver(e.props.data.matrix,t),e.actionAnimation(t,70,300,0)}),r))},e.generateNewGrid=function(){var t=H(e.state.matrices),r=t[t.length-1];e.props.setPrevMatrix(G(r)),e.setState({solved:!1}),e.props.data.validNumbers?(setTimeout((function(){e.actionAnimation(t,30,300,1)}),600),e.printValidNumbers()):e.actionAnimation(t,30,300,1)},e.printValidNumbers=function(){document.getElementsByClassName("grid")[0];var t=document.getElementsByClassName("grid-container")[0],r=document.querySelectorAll(".grid-item,.filled-grid-item");if(e.setState({showHelp:!e.state.showHelp}),e.props.data.validNumbers){t.style.border="0.3vh solid rgba(60,110,150,0.8)";for(var a=function(e){var t=r[e];setTimeout((function(){t.style.border="0.1vh solid rgba(60,110,150,1)",t.style.width="6.5vh",t.style.height="6.5vh"}),15*e)},n=0;n<r.length;n++)a(n);e.props.setValidNumbers(),e.props.setPrevMatrix(G(e.props.data.matrix))}else{t.style.border="0.45vh solid rgba(60,110,150,0.8)";for(var o=function(e){var t=r[e];setTimeout((function(){t.style.border="0.1vh solid rgba(60,110,150,1)",t.style.width="8.4vh",t.style.height="8.4vh"}),15*e)},i=0;i<r.length;i++)o(i);e.props.setValidNumbers(),e.props.setPrevMatrix(G(e.props.data.matrix))}},e}return Object(f.a)(r,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){fetch("data.txt").then((function(e){return e.text()})).then((function(t){e.setState({matrices:t})}))}),2e3)}},{key:"render",value:function(){var e=this.state.showHelp?"Hide Help":"Show Help",t=this.state.solved?"Empty the grid":"Solve",r=this.state.solved?"my-blue-animation":this.state.animation;return s.a.createElement("div",null,s.a.createElement("div",{className:"bar"},"Sudoku Solver"),s.a.createElement("div",{className:"secondPartBar"},s.a.createElement(ie,{setSolver:this.setSolver}," Algorithms "),s.a.createElement("div",{className:"buttonStyle",onClick:this.generateNewGrid},"Change grid"),s.a.createElement("div",{className:"buttonStyle",onClick:this.printValidNumbers},e),s.a.createElement("div",{className:"solve-button",onClick:this.solveTheGrid,style:{borderRadius:"0vw 0.6vw 0.6vw 0vw",fontSize:"1.7vh",animationName:r}},t)))}}]),r}(i.Component)),le=(r(21),!1),ce=function(e){Object(v.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleDragStart=function(e){ee=e.clientX,te=e.clientY,ne=document.getElementsByClassName("trashContainer")[0],((oe=ne.getBoundingClientRect()).right-ee>10||oe.bottom-te>10)&&(le=!0)},e.handleDrag=function(e){var t=document.getElementsByClassName("grid-container")[0].getBoundingClientRect();le&&(re=e.clientX-ee,ae=e.clientY-te,ne.style.cursor="grabbing",oe.left+re>=t.right?(ne.style.left="".concat(oe.left+re,"px"),ne.style.top="".concat(oe.top+ae,"px")):ne.style.top="".concat(oe.top+ae,"px"))},e.handleEndDrag=function(e){le=!1,ne.style.cursor="grab"},e}return Object(f.a)(r,[{key:"render",value:function(){return s.a.createElement("div",{className:"trashContainer",onMouseDown:this.handleDragStart,onMouseMove:this.handleDrag,onMouseUp:this.handleEndDrag},s.a.createElement("div",{className:"dragSection"},"Cick to move!"),"Drop numbers here")}}]),r}(i.Component),ue=function(e){Object(v.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={matrix:[[0,0,0,5,8,0,7,0,0],[0,9,7,0,0,3,0,0,1],[0,0,0,0,6,7,0,9,0],[0,0,1,0,9,0,0,0,5],[0,7,2,0,0,0,9,4,0],[8,0,0,0,4,0,1,0,0],[0,5,0,0,0,0,0,0,0],[2,0,0,0,0,0,3,8,0],[0,0,4,0,7,1,0,0,0]],prevMatrix:[[0,0,0,5,8,0,7,0,0],[0,9,7,0,0,3,0,0,1],[0,0,0,0,6,7,0,9,0],[0,0,1,0,9,0,0,0,5],[0,7,2,0,0,0,9,4,0],[8,0,0,0,4,0,1,0,0],[0,5,0,0,0,0,0,0,0],[2,0,0,0,0,0,3,8,0],[0,0,4,0,7,1,0,0,0]],validNumbers:!1},e.changeMatrix=function(t,r,a){if(e.state.validNumbers){var n=e.state.matrix;n[t][r]=a,console.log(n),e.setState({matrix:E(n)})}else{var o=e.state.matrix;o[t][r]=a,e.setState({matrix:o})}},e.setValidNumbers=function(){if(e.state.validNumbers){for(var t=e.state.matrix,r=0;r<9;r++)for(var a=0;a<9;a++)t[r][a]>0&&"number"===typeof t[r][a]?t[r][a]=t[r][a]:t[r][a]=0;e.setState({matrix:t,validNumbers:!1})}else{var n=e.state.matrix;n=E(n),e.setState({matrix:n,validNumbers:!0})}},e.setPrevMatrix=function(t){e.setState({prevMatrix:t})},e.setMatrix=function(t){e.setState({matrix:t})},e}return Object(f.a)(r,[{key:"render",value:function(){return s.a.createElement("section",{className:"App"},s.a.createElement(se,{setPrevMatrix:this.setPrevMatrix,setValidNumbers:this.setValidNumbers,setMatrix:this.setMatrix,data:this.state}),s.a.createElement(ce,null),s.a.createElement(g,{matrix:this.state.matrix,changeMatrix:this.changeMatrix}),s.a.createElement(C,{changeMatrix:this.changeMatrix,matrix:this.state.matrix}))}}]),r}(i.Component);r(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1ede2f14.chunk.js.map