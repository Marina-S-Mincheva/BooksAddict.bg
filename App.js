function App() {
  var app = this;
  this.pageContainer = this.getEl('#pageContent');

  // Хващаме клик на всички линкове които имат атрибут rel="local", което ни показва че са локални за апп.
  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.rel === 'local') {
      event.preventDefault();
      app.openPage(event.target.getAttribute('href'));
    }
  });

  // Подготвяме форма за регистрация
  this.getEl('#page-registration form').addEventListener('submit', function(event) {
    event.preventDefault();

    var userName = app.getEl('#reg-name');
    var userPass = app.getEl('#reg-pass');
    var error = app.getEl('#reg-error');

    error.classList.add('hidden');

    if (!userName.value.length || !userPass.value.length) {
      error.innerHTML = 'Please fill all fields';
      error.classList.remove('hidden');
    } else if (app.getUser(userName.value)) {
      error.innerHTML = 'User with that name already exists';
      error.classList.remove('hidden');
    } else {
      app.setUser({
        name: userName.value,
        pass: userPass.value
      });
      app.setCurrentUser(userName.value);
      app.checkIfLogged(false);
    }
  });

  // Подготвяме логин форма
  this.getEl('#page-login form').addEventListener('submit', function(event) {
    event.preventDefault();

    var userName = app.getEl('#login-name');
    var userPass = app.getEl('#login-pass');
    var error = app.getEl('#login-error');
    var user = app.getUser(userName.value);

    error.classList.add('hidden');

    if (!userName.value.length || !userPass.value.length) {
      error.innerHTML = 'Please fill all fields';
      error.classList.remove('hidden');
    } else if (!user || user.pass !== userPass.value) {
      error.innerHTML = 'Wrong username or password';
      error.classList.remove('hidden');
    } else {
      app.setCurrentUser(userName.value);
      app.checkIfLogged();
    }
  });

  this.checkIfLogged();
}

App.prototype = {
  getCurrentUser: function() {
    var userName = localStorage.getItem('currentUser');

    if (!userName) {
      return false;
    }

    return this.getUser(userName);
  },
  setCurrentUser: function(userName) {
    localStorage.setItem('currentUser', userName);
  },
  getUser: function(userName) {
    var users = this.getAllUsers();

    return users[userName];
  },
  setUser: function(data) {
    var users = this.getAllUsers();

    users[data.name] = data;

    localStorage.setItem('users', JSON.stringify(users));
  },
  getAllUsers: function() {
    var users = {};

    try {
      users = JSON.parse(localStorage.getItem('users'));
    } catch(e) {
      console.error('Не можах да заредя потребители');
    }

    if (!users) {
      users = {};
    }

    return users;
  },
  getEl: function(selector) {
    return document.querySelector(selector);
  },
  getEls: function(selector) {
    return document.querySelectorAll(selector);
  },
  checkIfLogged: function(redirecToLogin) {
    var currentUser = this.getCurrentUser();

    // Ако няма логнат усер – логин форма.
    if (!currentUser) {
      if (!redirecToLogin && redirecToLogin !== undefined) {
        this.openPage('login');
      }

      this.getEl('#login-button').classList.remove('hidden');
      this.getEl('#registration-button').classList.remove('hidden');
      this.getEl('#logout-button').classList.add('hidden');
      this.getEl('#current-user').classList.add('hidden');
    } else {
      this.getEl('#login-button').classList.add('hidden');
      this.getEl('#registration-button').classList.add('hidden');
      this.getEl('#logout-button').classList.remove('hidden');
      this.getEl('#current-user').classList.remove('hidden');
      this.getEl('#current-user').innerText = 'Welcome ' + currentUser.name;
      this.openPage('home');
    }
  },
  openPage: function(pageName) {
    var nextPage = this.getEl('#page-' + pageName);
    // Търсим елемент на който ИД започва с 'page-' и има клас 'active'
    var currentPage = this.getEl('[id^=page-].active');

    // Скриваме текуща страница
    if (currentPage) {
      currentPage.classList.remove('active');
    }

    if (!nextPage) {
      nextPage = this.getEl('#page-404');
    }

    // Показваме избрана страница
    nextPage.classList.add('active');

    if (typeof this['page-' + pageName] === 'function') {
      this['page-' + pageName]();
    }

  },

  ajax:  function (url, success, failure) {
    var xmlhttp = new XMLHttpRequest();

    //the callback function to be callled when AJAX request comes back
    xmlhttp.onreadystatechange = function(response) {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200 && success) {
          success(response.target.responseText);
        } else if(failure) {
          failure();
        }
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  },

  'page-logout': function() {
    localStorage.removeItem('currentUser');
    this.checkIfLogged();
  }

};