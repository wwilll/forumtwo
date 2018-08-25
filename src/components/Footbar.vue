<template>
  <div id="footer">
      <router-link class="f-btn" to='/' exact>
        <svg class="home" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,50,50">
          <path stroke="#000" d="m50.37843,24.91094l-6.4807,-6.07565l0,-14.51053l-5.55579,0l0,9.30198l-12.96351,-12.15329l-25,23.4375l5.95157,-0.13294l0,23.69545l37.83229,0l0,-23.5625l6.21614,0zm-25,20.17347l-12.3455,0l0,-13.88948l12.3455,0l0,13.88948zm11.99416,-5.95263l-8.11251,0l0,-8.02018l8.11251,0l0,8.02018z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
        </svg>
      </router-link>
      <router-link class="f-btn" to='/writepost'>
        <svg class="plus" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,22,22">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </router-link>
      <router-link class="f-btn" to='/info'>
        <svg class="info" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,50,50">
          <path stroke="#000" d="m34.47605,19.22479c0,0 1.41757,-6.73411 0,-9.01527c-1.41924,-2.28116 -1.98527,-3.80065 -5.10592,-4.88847s-1.9836,-0.87102 -4.25271,-0.75975c-2.26911,0.10936 -4.16088,1.51949 -4.16088,2.27924c0,0 -1.41757,0.10936 -1.9836,0.76166c-0.5677,0.65231 -1.51274,3.69129 -1.51274,4.45296s0.47252,5.86693 0.94505,6.95283l-0.56269,0.2168c-0.47252,6.2986 1.89009,7.06027 1.89009,7.06027c0.84987,5.86693 1.70142,3.36897 1.70142,4.88847s-0.85154,0.97846 -0.85154,0.97846s-0.7547,2.3886 -2.64479,3.2577c-1.89009,0.86718 -12.38244,5.53694 -13.23566,6.5154c-0.85321,0.98038 -0.75637,5.54077 -0.75637,5.54077l44.99322,0c0,0 0.09851,-4.56039 -0.7547,-5.54077c-0.85488,-0.98038 -11.34723,-5.64821 -13.23733,-6.5154c-1.89009,-0.8691 -2.64479,-3.2577 -2.64479,-3.2577s-0.85154,0.54103 -0.85154,-0.97846s0.85154,0.97846 1.70309,-4.88847c0,0 2.36095,-0.76166 1.89009,-7.06027l-0.5677,0z" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
        </svg>
      </router-link>
    </div>
</template>
<style>
#footer{
  position: fixed;
  border-top: 1px solid rgb(212, 203, 203);
  z-index: 5;
  bottom: 0;
  left: 0;
  background-color: #fafcfc;
  width:100%;
  height: 50px;
  display: flex;
}
#footer .f-btn{
  flex: auto;
  width: 50px;
  height: 40px;
  padding: 5px;
}
#footer .router-link-active svg.home path{
  fill: black;
}
#footer .router-link-active svg.info path{
  fill: black;
}
</style>
