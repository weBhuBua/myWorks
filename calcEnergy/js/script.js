



function calcEnergy() {
   let dayOld = +document.querySelector('.day-old').value; // День - прошлые значения
   let dayNew = +document.querySelector('.day-new').value; // День - текущие значения
   let nightOld = +document.querySelector('.night-old').value; // Ночь - прошлые значения
   let nightNew = +document.querySelector('.night-new').value; // Ночь - текущие значения

   let outKwch = document.querySelector('.out-kwch'); // Ночь - текущие значения
   let outMoney = document.querySelector('.out-money'); // Ночь - текущие значения
   let outWarning = document.querySelector('.out-warning'); // Для предупреждений
   let dropd = document.querySelector('.dropd'); // Дополнительно

   outKwch.innerHTML = '';
   outMoney.innerHTML = '';
   dropd.innerHTML = '';

   // console.log(dayOld);
   // console.log(typeof (dayOld));
   if (!dayOld) {
      console.log('nooooo');
   } else {
      console.log('yes');
   }
   let totalOverSto = 0;
   let totalOverStoNormal = 0;
   let totalMoney = 0;
   let totalEnergy = 0;
   let posleSta = 0;
   let posleStaNormal = 0;
   let sto = 100;
   let perDay = 0;
   let perNight = 0;

   let dayReal = dayNew - dayOld; // Всего дневных за месяц
   let nightReal = nightNew - nightOld; // Всего ночных за месяц

   // if (nightReal > 0 && dayReal > 0) {
   
   if (dayOld > 0 && dayNew > 0 && nightOld > 0 && nightNew > 0) { 
      
      if (dayReal > 0 && nightReal > 0) {

         totalEnergy = dayReal + nightReal; // Всего за месяц

         perDay = (dayReal * 100) / totalEnergy; // Процент дневных
         perNight = 100 - perDay; // Процент ночных

         if (totalEnergy > 100) {
            totalOverSto = totalEnergy - 100; // Количество больше ста
            posleSta = (((perDay * totalOverSto) / 100) * 1.68) + (((perNight * totalOverSto) / 100) * 0.84);  // Расчет более ста квт/ч
            totalOverStoNormal = totalOverSto * 1.68;
         }
      
   
         if (totalEnergy < 100) {
            sto = totalEnergy;
         }
         let doSta = (((perDay * sto) / 100) * 0.9) + (((perNight * sto) / 100) * 0.45); // Росчет до ста квт/ч
         let doStaNormal = sto * 0.9; // Расчет до ста квт/ч при обычном счетчике
      
         totalMoney = doSta + posleSta; // Подсчет стоимости
         totalMoneyNormal = doStaNormal + totalOverStoNormal; // Подсчет стоимости при обычном счетчике

         // Вывод данных
         if (dayOld > 0 && dayNew > 0 && nightOld > 0 && nightNew > 0) {
            outWarning.innerHTML = `<div class="alert alert-success" role="alert">
            Подсчитано!
         </div>`;
            outKwch.innerHTML = `Всего кВт/ч <span class="text-primary">${totalEnergy}</span>`;
            outMoney.innerHTML = `<p data-toggle="tooltip" data-placement="top" title="Возможна погрешность +- 0.2%">К оплате <i class="fas fa-exclamation-triangle"></i></p><span class="text-success">${totalMoney.toFixed(2)}</span>`;
            dropd.innerHTML = `<div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Подробнее
            </button>
            <div class="dropdown-menu">
               <p class="dropdown-item">День - <span>${dayReal}</span> кВт/ч</p>
               <p class="dropdown-item">Ночь - <span>${nightReal}</span> кВт/ч</p><hr>
               <p class="dropdown-item">При использовании<br> обычного счетчика <br> вы бы заплатили - <span class="sp-1">${totalMoneyNormal.toFixed(2)}</span> грн.</p>
               <p class="dropdown-item">Вы сэкономили - <span class="sp-2">${(totalMoneyNormal - totalMoney).toFixed(2)}</span> грн.</p>
             </div>
          </div>`;
         }

      }
      else {
         outWarning.innerHTML = `<div class="alert alert-warning" role="alert">
      Заполните поля правильно!</div>`;
      }

   } else {
      // outWarning.innerHTML = 'Заполните все поля';
      outWarning.innerHTML = `<div class="alert alert-warning" role="alert">
      Заполните все поля! </div>`;
   }
   
   

   // console.log('hello');
   // console.log(typeof(dayOld));

   //  if (dayOld !== '') {
   //    console.log('hello');
   // } else {
   //    console.log('Заполните все поля!');
   // }
   // console.log(totalMoney);

   
   
   return totalMoney;
}

document.querySelector('button').onclick = calcEnergy;

// // if (trim(dayOld) != '' && trim(dayNew) != '' && trim(nightOld) != '' && trim(nightNew) != '')