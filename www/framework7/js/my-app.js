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
      url: 'paginas/onibus.html',
    },
    {
      path: '/pontos/',
      url: 'paginas/pontos.html',
    },  
       {
      path: '/info/',
      url: 'paginas/info.html',
    }, 
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

