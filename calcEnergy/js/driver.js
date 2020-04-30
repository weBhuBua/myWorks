const driver = new Driver({
   doneBtnText: 'Завершить', // текст на кнопке финиша
   closeBtnText: 'Закрыть', // для закрытия тура
   nextBtnText: 'Далее', // переход к следующему шагу
  prevBtnText: 'Назад', // переход на шаг назад
  padding: 5,
 });
 driver.defineSteps([
   {
     element: '.drive',
     popover: {
       title: 'Тур по сайту',
       description: 'Сайт предназначен для расчета показаний двухтарифного счетчика электроэнергии',
       position: 'bottom'
     }
   },
   {
     element: '.day-old_block',
     popover: {
       title: 'Прошлые дневные данные',
       description: 'В этом поле введите прошлые дневные показатели',
       position: 'bottom'
     }
   },
   {
     element: '.day-new_block',
     popover: {
       title: 'Текущие дневные данные',
       description: 'В этом поле введите текущие дневные показатели',
       position: 'bottom'
     }
   },
   {
     element: '.night-old_block',
     popover: {
       title: 'Прошлые ночные данные',
       description: 'В этом поле введите прошлые ночные показатели',
       position: 'bottom'
     }
   },
    {
     element: '.night-new_block',
     popover: {
       title: 'Текущие ночные данные',
       description: 'В этом поле введите текущие ночные показатели',
       position: 'bottom'
     }
   },
    {
     element: '.last-day',
     popover: {
       title: 'Сохраненные дневные данные',
       description: 'Если ранее вы пользовались данным калькулятором, то нажав на это поле раннее введенные дневные показатели (т.е. показатели за прошлый месяц) добавятся автоматически. Эти данные сохраняются каждый раз после нажатия кнопки "Расчитать"',
       position: 'bottom'
     }
   },
    {
     element: '.last-night',
     popover: {
       title: 'Сохраненные ночные данные',
       description: 'Тут все так же как и с дневными показателями',
       position: 'bottom'
     }
   },
   {
     element: '.calc-btn',
     popover: {
       title: 'Расчет показателей',
       description: 'Нажав эту кнопку произведется расчет',
       position: 'top'
     }
   },
   {
     element: '.calc',
     popover: {
       title: 'Внимание!',
       description: 'Данный калькулятор имеет небольшую погрешность, особо не влияющую на общую картину вычисления',
       position: 'bottom'
     }
   },
 ]);
 
 
 let btn = document.querySelector('.drive');
 
 //запуск тура по нажатию на кнопку
 btn.addEventListener('click', function(){
   driver.start();  
 });
 