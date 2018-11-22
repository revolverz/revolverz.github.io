function preloadImages() {
        {
          for( var i = 0; i<arguments.length; i++ )
            $( '<img />' ).attr( 'src', arguments[i] );
        }
        };

preloadImages( 'img/main-content/main-content__img_type_fashion-shirts.png',
              '/img/main-content/main-content__img_type_new-color.png',
              '/img/main-content/main-content__img_type_sale.png',
              '/img/main-content/main-content__img_type_new-swimwear.png' );
