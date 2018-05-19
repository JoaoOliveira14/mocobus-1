var app = new Framework7({
    
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/onibus/',
      url: './paginas/onibus.html',
    },
    {
      path: '/paradas/',
      url: './paginas/paradas.html',
    },  
    {
      path: '/info/',
      url: './paginas/info.html',
    },
    {
        path: '/diamantino/',
        url:'./paginas/diamantino.html'
    },
    {
      path: '/novarepublicaprefeitura/',
      url: './paginas/novarepublicaprefeitura.html'
    },
    {
        path:'/florestaprainha/',
        url:'./paginas/florestaprainha.html'
    }
  ],
    
  // ... other parameters


});
var mainView = app.views.create('.view-main');



