// Function to create a notification
function createNotification(options) {
    const type = options.type;
    let icon = '';
  
    switch (type) {
      case 'success':
        icon = 'check-circle';
        break;
      case 'error':
        icon = 'circle-xmark';
        break;
      case 'speech':
        icon = 'comment';
        break;
      default:
        icon = 'circle-exclamation';
        break;
    }
  
    const notification = $('<div>');
    notification.addClass('notification');
    notification.addClass(type);
    notification.append(`<i id="icon-${type}" class="fas fa-${icon}"></i> <span> ${options.message}</span>`);
    notification.fadeIn();
  
    if (options.style) {
      Object.keys(options.style).forEach((key) => {
        notification.css(key, options.style[key]);
      });
    }
  
    return notification;
  }
  
  // Function to show a notification
  function showNotification(options) {
    if (options.persist === undefined) {
      const notification = createNotification(options);
      $('.notif-container').append(notification);
  
      setTimeout(() => {
        $.when(notification.fadeOut()).done(() => {
          notification.remove();
        });
      }, options.length != null ? options.length : 2500);
    } else {
      if (options.persist.toString() === 'START') {
        if (persistentNotifs[options.id] === undefined) {
          const notification = createNotification(options);
          $('.notif-container').append(notification);
          persistentNotifs[options.id] = notification;
        } else {
          const notification = $(persistentNotifs[options.id]);
          notification.addClass('notification');
          notification.addClass(options.type);
          notification.text(options.message);
          if (options.style) {
            Object.keys(options.style).forEach((key) => {
              notification.css(key, options.style[key]);
            });
          }
        }
      } else {
        if (options.data.toUpperCase() === 'END') {
          const notification = $(persistentNotifs[options.id]);
          $.when(notification.fadeOut()).done(() => {
            notification.remove();
            delete persistentNotifs[options.id];
          });
        }
      }
    }
  }
  
  // Initialize the persistent notifications object
  const persistentNotifs = {};
  
  // Add event listener to the window
  window.addEventListener('message', (event) => {
    showNotification(event.data);
  });