(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{image:"./images/Ackabar.png",name:"Admiral Ackabar"},{image:"./images/BB8.png",name:"BB8"},{image:"./images/BobaFett.png",name:"Boba Fett"},{image:"./images/C3po.png",name:"C3P0"},{image:"./images/Chewbaca.png",name:"Chewbacca"},{image:"./images/emporer.png",name:"Emporer Palpatine"},{image:"./images/Finn.png",name:"Finn"},{image:"./images/Greedo.png",name:"Greedo"},{image:"./images/HanSolo.png",name:"Han Solo"},{image:"./images/Holdo.png",name:"Admiral Holdo"},{image:"./images/Hux.png",name:"Comander Hux"},{image:"./images/Jaba.png",name:"Jaba The Hutt"},{image:"./images/JediLuke.png",name:"Jedi Luke"},{image:"./images/Kylo.png",name:"Kylo Ren"},{image:"./images/Lando.png",name:"Lando Calrisian"},{image:"./images/Lea.png",name:"Princess Lea"},{image:"./images/MonMothma.png",name:"Mon Mothma"},{image:"./images/ObiWanKenobi.png",name:"Obi Wan Kenobi"},{image:"./images/OldLuke.png",name:"Old Luke"},{image:"./images/Phasma.png",name:"Captain Phasma"},{image:"./images/Poe.png",name:"Poe Daermon"},{image:"./images/Porg.png",name:"Porg"},{image:"./images/R2D2.png",name:"R2D2"},{image:"./images/Rey.png",name:"Rey"},{image:"./images/Tarkin.png",name:"Admiral Tarkin"},{image:"./images/Vader.png",name:"Darth Vader"},{image:"./images/Wicket.png",name:"Wicket"},{image:"./images/Yoda.png",name:"Yoda"}]},15:function(e,a,n){},16:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),m=n(3),i=n.n(m);var o=function(e){return r.a.createElement("nav",{className:"navbar fixed-top navbar-light text-white p-0 "},r.a.createElement("ul",{className:"list-group list-group-horizontal bg-info flex-fill text-center"},r.a.createElement("li",{className:"list-group-item bg-info flex-fill"},r.a.createElement("h2",null,"Zac's Clicky Game")),r.a.createElement("li",{className:"list-group-item bg-info flex-fill"},r.a.createElement("h4",null,e.guess?"true"===e.guess?"Incorrect Guess!":"Correct guess!":"")),r.a.createElement("li",{className:"list-group-item bg-info flex-fill"},r.a.createElement("h3",null,"HighScore: ",e.highScore," | Score: ",e.score))))},l=n(4),c=n(5),s=n(7),g=n(6),u=n(8);var p=function(e){return r.a.createElement("div",{className:"container mb-4 bg-info pb-3"},e.children)};n(15);var h=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center text-white"},r.a.createElement("h1",{className:"display-4 text-center m-4"}," Clicky Game!"),r.a.createElement("p",{className:"lead"},"Click a picture to earn points, but don't click the same one!"))};n(16);var d=function(e){return r.a.createElement("div",{className:"card bg-dark"},r.a.createElement("img",Object.assign({src:e.image,alt:e.name,clicked:e.clicked,className:"card-img"},e)))};var f=function(e){return r.a.createElement("div",{className:"card-group"},e.children)},b=n(1),k=function(e){function a(){var e,n;Object(l.a)(this,a);for(var t=arguments.length,r=new Array(t),m=0;m<t;m++)r[m]=arguments[m];return(n=Object(s.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={rowOne:[],rowTwo:[],rowThree:[],clicked:[],guess:"",name:"",score:0,highScore:0},n.resetGame=function(){n.setState({name:"",score:0,clicked:[]}),n.createRow()},n.createRow=function(){b.sort(function(){return.5-Math.random()});for(var e=[],a=[],t=[],r=0;r<4;r++)e.push(b[r]);for(var m=4;m<8;m++)a.push(b[m]);for(var i=8;i<12;i++)t.push(b[i]);n.setState({rowOne:e,rowTwo:a,rowThree:t})},n.handleImputChange=function(e){console.log("clicked");var a=JSON.stringify(e.target.name),t=!1,r=n.state.score,m=n.state.clicked;if(console.log(m),console.log(a),m)for(var i=0;i<m.length;i++)console.log(m[i]),m[i]===a&&(t=!0,console.log("check"+i));else t=!1;(console.log(t),!0===t)?(console.log("you lose"),n.setState({guess:"true"}),n.state.highScore<r&&n.setState({highScore:r}),n.resetGame()):(n.state.clicked.push(a),r++,n.setState({score:r,guess:"false"}),n.createRow(),console.log(n.state.score))},n}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.createRow()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{guess:this.state.guess,score:this.state.score,highScore:this.state.highScore}),r.a.createElement(h,null),r.a.createElement(p,null,r.a.createElement(f,null,this.state.rowOne.map(function(a,n){return r.a.createElement(d,{onClick:e.handleImputChange,image:a.image,name:a.name,key:a.name})})),r.a.createElement(f,null,this.state.rowTwo.map(function(a,n){return r.a.createElement(d,{onClick:e.handleImputChange,image:a.image,name:a.name,key:a.name})})),r.a.createElement(f,null,this.state.rowThree.map(function(a,n){return r.a.createElement(d,{onClick:e.handleImputChange,image:a.image,name:a.name,key:a.name})}))))}}]),a}(t.Component);var E=function(){return r.a.createElement("nav",{className:"navbar navbar-light  p-0 bg-info"},r.a.createElement("p",{className:"navbar-brand m-0 bg-info"},"Created by: Zac Warner"))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(E,null))};i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,a,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.60acd88b.chunk.js.map