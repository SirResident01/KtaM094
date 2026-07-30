/* ============================================================
   Теория по темам КТА. Ключ: "subject|Название группы тем"
   ============================================================ */
window.KTA_THEORY = {

/* ==================== ГОТОВНОСТЬ К ОБУЧЕНИЮ ==================== */
'readiness|Числа и вычисления': `
<h3>Проценты</h3>
<ul>
<li><b>Найти процент от числа:</b> 30% от 250 → 250 · 0,3 = 75</li>
<li><b>Сколько процентов одно от другого:</b> 15 от 60 → 15/60 · 100% = 25%</li>
<li><b>Найти исходное число:</b> после снижения на 20% стало 160 → 160 / 0,8 = 200</li>
</ul>
<div class="warn-box"><b>Ловушка:</b> проценты не складываются. +20% и ещё +20% = ·1,2·1,2 = 1,44, то есть <b>+44%</b>, а не 40%. Аналогично +10% и −10% дают 0,99 — итог на 1% <i>меньше</i> исходного.</div>

<h3>Дроби</h3>
<ul>
<li>Сложение: привести к общему знаменателю → 1/2 + 1/3 = 3/6 + 2/6 = 5/6</li>
<li>Умножение: числитель·числитель, знаменатель·знаменатель → 2/3 · 3/4 = 6/12 = 1/2</li>
<li>Деление: умножить на перевёрнутую → 2/3 : 3/4 = 2/3 · 4/3 = 8/9</li>
<li>Сравнение: привести к общему знаменателю. 2/3 = 8/12, 3/4 = 9/12 → 3/4 больше</li>
</ul>

<h3>Степени и корни</h3>
<ul>
<li>aᵐ · aⁿ = a<sup>m+n</sup> &nbsp;·&nbsp; aᵐ / aⁿ = a<sup>m−n</sup> &nbsp;·&nbsp; (aᵐ)ⁿ = a<sup>mn</sup></li>
<li>a⁻ⁿ = 1/aⁿ &nbsp;·&nbsp; a⁰ = 1</li>
<li>√(ab) = √a · √b &nbsp;·&nbsp; √27 = √(9·3) = 3√3</li>
</ul>

<h3>Средние и пропорции</h3>
<ul>
<li>Среднее арифметическое = сумма / количество</li>
<li><b>Приём:</b> если известно среднее — восстанови сумму. Среднее 4 чисел = 80 → сумма = 320</li>
<li>Прямая пропорция: 4 карандаша — 100 ₸, значит 6 — 150 ₸</li>
<li><b>Обратная пропорция</b> (рабочие, трубы): 5 рабочих · 12 дней = 60 человеко-дней → 6 рабочих справятся за 10 дней</li>
</ul>`,

'readiness|Логика и последовательности': `
<h3>Силлогизмы (выводы)</h3>
<p>«Все A — B» + «C есть A» → «C есть B». Пример: все кошки — животные, Барсик — кошка → Барсик животное.</p>
<div class="warn-box"><b>Главная ловушка:</b> «некоторые» не даёт права на «все», и обратный вывод неверен. Из «все розы — цветы» <b>не следует</b> «все цветы — розы». Из «некоторые цветы вянут» ничего не следует про розы конкретно — правильный ответ будет «однозначно определить нельзя».</div>

<h3>Контрапозиция</h3>
<p>Утверждение «если не A, то B» равносильно «если не B, то A».</p>
<p>Пример: «Если не понедельник — Айдос идёт в зал». Он <i>не</i> пошёл → значит понедельник.</p>

<h3>Числовые ряды — что проверять по порядку</h3>
<ol>
<li><b>Разность:</b> 5, 10, 15, 20 → +5</li>
<li><b>Множитель:</b> 3, 9, 27, 81 → ·3 &nbsp;|&nbsp; 100, 50, 25 → :2</li>
<li><b>Растущая разность:</b> 2, 6, 12, 20, 30 → +4, +6, +8, +10 (это n(n+1))</li>
<li><b>Квадраты/кубы:</b> 1, 4, 9, 16, 25 → n²</li>
<li><b>Фибоначчи:</b> каждое = сумма двух предыдущих → 1, 1, 2, 3, 5, 8, 13</li>
<li><b>Буквы:</b> переведи в номера алфавита. А(1), В(3), Д(5), Ж(7) → шаг 2 → И(9)</li>
</ol>

<h3>Прогрессии</h3>
<ul>
<li>Арифметическая: aₙ = a₁ + (n−1)d</li>
<li>Геометрическая: aₙ = a₁ · q<sup>n−1</sup></li>
<li>Сумма 1…n = <b>n(n+1)/2</b> → сумма до 100 = 100·101/2 = 5050</li>
</ul>

<h3>Задачи «лишнее слово»</h3>
<p>Ищи признак, по которому один элемент выпадает: 3, 5, 7, 9, 11 — все простые, кроме 9. Квадрат, круг, треугольник, <b>куб</b>, ромб — куб объёмный.</p>`,

'readiness|Текстовые задачи': `
<h3>Движение</h3>
<p><b>S = v · t</b>, значит v = S/t, t = S/v.</p>
<ul>
<li><b>Средняя скорость</b> = весь путь / всё время. Нельзя усреднять сами скорости!<br>150 км за 2 ч + 90 км за 1 ч → (150+90)/(2+1) = 80 км/ч</li>
<li><b>Навстречу:</b> скорость сближения = v₁ + v₂. 280 км при 60 и 80 → 280/140 = 2 ч</li>
<li><b>Вдогонку:</b> скорость сближения = v₁ − v₂</li>
</ul>

<h3>Совместная работа</h3>
<p>Принимаем всю работу за <b>1</b>. Производительность = 1/время.</p>
<p>Труба A за 3 ч (1/3 в час), труба B за 6 ч (1/6 в час). Вместе: 1/3 + 1/6 = 1/2 в час → весь бассейн за <b>2 часа</b>.</p>

<h3>Возраст</h3>
<p><b>Ключ:</b> разница в возрасте никогда не меняется.</p>
<p>Отцу 40, сыну 10. Когда отец будет вдвое старше: 40 + x = 2(10 + x) → x = 20 лет.</p>

<h3>Уравнения</h3>
<ul>
<li>Раскрыть скобки → перенести неизвестные влево, числа вправо → разделить</li>
<li>3(x − 2) = 2x + 5 → 3x − 6 = 2x + 5 → x = 11</li>
<li><b>x² = 49 → x = ±7</b> (два корня, частая ошибка — забыть минус)</li>
</ul>

<h3>Геометрия — формулы</h3>
<ul>
<li>Прямоугольник: S = a·b, P = 2(a+b)</li>
<li>Квадрат: S = a², P = 4a</li>
<li>Треугольник: S = ½·a·h, сумма углов = <b>180°</b></li>
<li>Круг: S = πr², длина окружности C = 2πr</li>
<li>Пифагор: c² = a² + b² → катеты 3 и 4 дают гипотенузу 5</li>
</ul>`,

'readiness|Комбинаторика и множества': `
<h3>Перестановки</h3>
<p>Все элементы разные: <b>n!</b> способов. 4 книги на полке → 4! = 24.</p>
<p><b>С повторениями</b> (есть одинаковые буквы): n! / (k₁!·k₂!…).<br>«МАМА»: 4!/(2!·2!) = 24/4 = <b>6</b>.</p>

<h3>Сочетания и размещения</h3>
<ul>
<li><b>Порядок НЕ важен</b> (выбрать команду) — сочетания:<br>C(n,k) = n! / (k!·(n−k)!) → C(5,2) = 10</li>
<li><b>Порядок важен</b> (распределить места) — размещения:<br>A(n,k) = n! / (n−k)!</li>
</ul>
<div class="warn-box">Спроси себя: «если поменять элементы местами, это другой вариант?» Да → размещения, нет → сочетания.</div>

<h3>Вероятность</h3>
<p><b>P = благоприятные исходы / все исходы</b>, всегда от 0 до 1.</p>
<ul>
<li>Чётное на кубике: 3 из 6 → 1/2</li>
<li>3 белых из 5 шаров → 3/5</li>
<li><b>Независимые события подряд — умножаем:</b> два орла = 1/2 · 1/2 = 1/4</li>
</ul>

<h3>Множества</h3>
<ul>
<li><b>Пересечение</b> A ∩ B — общие элементы; <b>объединение</b> A ∪ B — все вместе</li>
<li><b>Формула включений-исключений:</b> |A ∪ B| = |A| + |B| − |A ∩ B|</li>
</ul>
<p>Пример: 30 студентов, 18 знают Python, 15 SQL, 8 оба. Хотя бы один: 18+15−8 = 25. Не знают ничего: 30 − 25 = <b>5</b>.</p>`,

/* ========================== АНГЛИЙСКИЙ · 14 тем КТА ========================== */
'english|12 времён (Tenses)': `
<h3>Главная идея: 12 времён — это таблица 3 × 4</h3>
<p>Не надо учить 12 отдельных правил. Есть <b>3 времени</b> (когда) и <b>4 аспекта</b> (как), и любое из 12 времён — это их пересечение.</p>
<ul>
<li><b>Строка</b> отвечает на вопрос «<i>когда?</i>» — present, past, future</li>
<li><b>Столбец</b> отвечает на вопрос «<i>как?</i>» — simple, continuous, perfect, perfect continuous</li>
</ul>

<h3>Полная сетка формул</h3>
<table>
<tr><th></th><th>simple</th><th>continuous</th><th>perfect</th><th>perfect continuous</th></tr>
<tr>
  <td><b>present</b></td>
  <td>V / V<b>s</b> (he, she, it)<br><span class="muted">отр.: don't, doesn't</span></td>
  <td>am, is, are + V<b>ing</b></td>
  <td>have, has + <b>V3</b></td>
  <td>have, has + <b>been</b> + V<b>ing</b></td>
</tr>
<tr>
  <td><b>past</b></td>
  <td>V2, V<b>ed</b><br><span class="muted">отр.: didn't</span></td>
  <td>was, were + V<b>ing</b></td>
  <td><b>had</b> + V3</td>
  <td><b>had</b> + been + V<b>ing</b></td>
</tr>
<tr>
  <td><b>future</b></td>
  <td><b>will</b> + V<br><span class="muted">отр.: won't</span></td>
  <td>will <b>be</b> + V<b>ing</b></td>
  <td>will <b>have</b> + V3</td>
  <td>will have <b>been</b> + V<b>ing</b></td>
</tr>
</table>

<div class="warn-box"><b>Закономерности, которые видно прямо в таблице:</b><br>
• Столбец <b>continuous</b> — везде есть <b>-ing</b><br>
• Столбец <b>perfect</b> — везде есть <b>V3</b> (третья форма)<br>
• Столбец <b>perfect continuous</b> — везде есть <b>been + -ing</b><br>
• Строка <b>future</b> — везде начинается с <b>will</b><br>
Выучив это, ты соберёшь любое из 12 времён без зубрёжки.</div>

<h3>Что означает каждый столбец</h3>

<h4>Simple — просто факт</h4>
<p>Действие как <b>факт, привычка или регулярность</b>. Не важно, длилось оно или нет — важно, что оно есть, было или будет.</p>
<p><i>She works in Astana.</i> — работает вообще, это её работа.<br>
<i>I visited Almaty yesterday.</i> — факт: съездил.</p>

<h4>Continuous — процесс в момент</h4>
<p>Действие <b>в процессе</b> в конкретный момент. На схеме это дуга <i>над</i> точкой момента: началось раньше, ещё не закончилось.</p>
<p><i>She is working now.</i> — прямо сейчас в процессе.<br>
<i>I was reading when he called.</i> — читал, и в этот момент позвонили.</p>

<h4>Perfect — результат к моменту</h4>
<p>Действие <b>завершилось к какому-то моменту</b>, и важен его результат. На схеме — линия, упирающаяся в точку момента.</p>
<p><i>I have finished the test.</i> — закончил, и сейчас есть результат.<br>
<i>She had left before I arrived.</i> — ушла <b>раньше</b>, чем я пришёл.</p>

<h4>Perfect Continuous — длилось до момента</h4>
<p>Действие <b>длилось какое-то время</b> и подошло к моменту. Отвечает на вопрос «как долго?».</p>
<p><i>I have been studying for 2 hours.</i> — учусь уже 2 часа.<br>
<i>I had been waiting for an hour.</i> — прождал час до того момента.</p>

<h3>Что означает каждая строка</h3>
<ul>
<li><b>Present</b> — точка отсчёта <b>сейчас</b></li>
<li><b>Past</b> — точка отсчёта <b>в прошлом</b></li>
<li><b>Future</b> — точка отсчёта <b>в будущем</b></li>
</ul>
<p>Аспект при этом не меняет смысла — меняется только точка, относительно которой всё считается. Сравни один и тот же аспект perfect в трёх временах:</p>
<ul>
<li>I <b>have</b> finished — закончил к <i>настоящему</i> моменту</li>
<li>I <b>had</b> finished — закончил к <i>прошлому</i> моменту</li>
<li>I <b>will have</b> finished — закончу к <i>будущему</i> моменту</li>
</ul>

<h3>Маркеры — по ним узнают время в тесте</h3>
<table>
<tr><th>Время</th><th>Маркеры</th><th>Пример</th></tr>
<tr><td>Present Simple</td><td>usually, always, every day, often, never</td><td>She <b>works</b> in Astana.</td></tr>
<tr><td>Present Continuous</td><td>now, Look!, Listen!, at the moment</td><td>She <b>is working</b> now.</td></tr>
<tr><td>Present Perfect</td><td>already, just, ever, never, yet, since, for</td><td>I <b>have finished</b> the test.</td></tr>
<tr><td>Present Perfect Cont.</td><td>for / since + длительность</td><td>I <b>have been studying</b> for 2 hours.</td></tr>
<tr><td>Past Simple</td><td>yesterday, ago, last week, in 2019</td><td>I <b>visited</b> Almaty yesterday.</td></tr>
<tr><td>Past Continuous</td><td>at 5 pm yesterday, while, when</td><td>I <b>was reading</b> when he called.</td></tr>
<tr><td>Past Perfect</td><td>before, after, by the time</td><td>She <b>had left</b> before I arrived.</td></tr>
<tr><td>Past Perfect Cont.</td><td>for / since до прошлого момента</td><td>I <b>had been waiting</b> for an hour.</td></tr>
<tr><td>Future Simple</td><td>I think, probably, tomorrow</td><td>I <b>will help</b> you.</td></tr>
<tr><td>Future Continuous</td><td>at this time tomorrow</td><td>I <b>will be working</b> at 5.</td></tr>
<tr><td>Future Perfect</td><td>by 6 o'clock, by Monday</td><td>I <b>will have finished</b> by 6.</td></tr>
<tr><td>Future Perfect Cont.</td><td>by … for … (длительность к моменту)</td><td>By May I <b>will have been working</b> here for a year.</td></tr>
</table>

<h3>Ловушки, на которых чаще всего теряют баллы</h3>
<div class="warn-box">
<b>1. Окончание -s уходит во вспомогательный глагол.</b><br>
Правильно: What <b>does</b> this word <b>mean</b>? — а не «does … means».<br><br>

<b>2. Past Simple или Present Perfect?</b><br>
Есть точное время в прошлом (yesterday, last week) → <b>Past Simple</b>.<br>
Период ещё не закончился или важен результат → <b>Present Perfect</b>.<br>
<i>It is 8 p.m. Did you see Mary this morning?</i> — утро уже прошло, значит Past Simple.<br><br>

<b>3. С «you» всегда were, а не was.</b><br>
<i>You <b>were</b> sitting and reading.</i><br><br>

<b>4. since или for?</b><br>
<b>since</b> + точка отсчёта (since 2015, since Monday)<br>
<b>for</b> + отрезок (for ten years, for two hours)<br><br>

<b>5. После if и when будущее время не ставится.</b><br>
<i>If it <b>rains</b> tomorrow…</i> — а не «will rain».
</div>

<h3>V2 и V3 — что это</h3>
<p>У правильных глаголов обе формы совпадают и делаются через <b>-ed</b>: work → worked → worked.</p>
<p>У неправильных их надо знать наизусть — это отдельная тема, но вот самые частые:</p>
<table>
<tr><th>V1</th><th>V2 (прошедшее)</th><th>V3 (причастие)</th></tr>
<tr><td>go</td><td>went</td><td>gone</td></tr>
<tr><td>see</td><td>saw</td><td>seen</td></tr>
<tr><td>do</td><td>did</td><td>done</td></tr>
<tr><td>write</td><td>wrote</td><td>written</td></tr>
<tr><td>take</td><td>took</td><td>taken</td></tr>
<tr><td>leave</td><td>left</td><td>left</td></tr>
</table>
<p><b>Где какая форма нужна:</b> V2 — только в Past Simple. V3 — во всех perfect и в пассивном залоге.</p>
`,

'english|Passive Voice': `
<h3>Что такое Passive</h3>
<p>В активном залоге важно <b>кто</b> делает. В пассивном — <b>что делают с объектом</b>.</p>
<p><b>Active:</b> <i>They build houses.</i> (они строят)<br>
<b>Passive:</b> <i>Houses <b>are built</b>.</i> (дома строятся)</p>
<p>Формула всегда одна: <b>be + V3</b>. Время показывает глагол <b>be</b>.</p>

<h3>Таблица по временам</h3>
<table>
<tr><th>Время</th><th>Формула</th><th>Active</th><th>Passive</th></tr>
<tr><td>Present Simple</td><td>am/is/are + V3</td><td><i>They make cheese from milk.</i></td><td><i>Cheese <b>is made</b> from milk.</i></td></tr>
<tr><td>Past Simple</td><td>was/were + V3</td><td><i>Someone wrote the letter.</i></td><td><i>The letter <b>was written</b>.</i></td></tr>
<tr><td>Future Simple</td><td>will be + V3</td><td><i>She will finish the work.</i></td><td><i>The work <b>will be finished</b>.</i></td></tr>
<tr><td>Present Perfect</td><td>have/has been + V3</td><td><i>They have read the book.</i></td><td><i>The book <b>has been read</b>.</i></td></tr>
<tr><td>Past Perfect</td><td>had been + V3</td><td><i>They had sold the house.</i></td><td><i>The house <b>had been sold</b>.</i></td></tr>
<tr><td>Modals</td><td>can/must/should + be + V3</td><td><i>You can do it.</i></td><td><i>It <b>can be done</b>.</i></td></tr>
<tr><td>Present Continuous</td><td>am/is/are being + V3</td><td><i>They are repairing the road.</i></td><td><i>The road <b>is being repaired</b>.</i></td></tr>
</table>

<h3>Как перестроить предложение</h3>
<ol>
<li>Объект активного → подлежащее пассива.</li>
<li>Глагол → be (в нужном времени) + V3.</li>
<li>Кто делал — через <b>by</b> (если важно): <i>The Mona Lisa <b>was painted by</b> Leonardo da Vinci.</i></li>
</ol>
<p><i>Someone stole my bike.</i> → <i>My bike <b>was stolen</b>.</i> (someone обычно опускаем)<br>
<i>People speak English all over the world.</i> → <i>English <b>is spoken</b> all over the world.</i></p>

<h3>Ещё примеры</h3>
<ul>
<li><i>This bridge <b>was built</b> in 1998.</i></li>
<li><i>The results <b>will be announced</b> tomorrow.</i></li>
<li><i>The room <b>is being cleaned</b> now.</i></li>
<li><i>The documents <b>have already been signed</b>.</i></li>
<li><i>The problem <b>must be solved</b> quickly.</i></li>
</ul>
<div class="warn-box"><b>Частые ошибки:</b><br>
• Забыть <b>been</b> в Perfect: не <i>has built</i> в пассиве, а <i>has <b>been</b> built</i>.<br>
• Перепутать время be: <i>is built</i> (сейчас/обычно) ≠ <i>was built</i> (в прошлом).<br>
• V3 обязателен: <i>was written</i>, не <i>was wrote</i>.</div>`,

'english|Reported Speech': `
<h3>Что это</h3>
<p><b>Direct speech</b> — чьи-то слова в кавычках.<br>
<b>Reported (indirect) speech</b> — пересказ без кавычек. Обычно времена сдвигаются на шаг назад.</p>
<p><i>“I am busy,” he said.</i> → <i>He said (that) he <b>was</b> busy.</i></p>

<h3>Сдвиг времён</h3>
<table>
<tr><th>Прямая речь</th><th>Косвенная</th><th>Пример</th></tr>
<tr><td>Present Simple</td><td>Past Simple</td><td><i>“I work here.”</i> → <i>He said he <b>worked</b> there.</i></td></tr>
<tr><td>Present Continuous</td><td>Past Continuous</td><td><i>“I am reading.”</i> → <i>She said she <b>was reading</b>.</i></td></tr>
<tr><td>Present Perfect</td><td>Past Perfect</td><td><i>“I have finished.”</i> → <i>He said he <b>had finished</b>.</i></td></tr>
<tr><td>Past Simple</td><td>Past Perfect</td><td><i>“I saw her.”</i> → <i>He said he <b>had seen</b> her.</i></td></tr>
<tr><td>will</td><td>would</td><td><i>“I will come.”</i> → <i>She said she <b>would</b> come.</i></td></tr>
<tr><td>can</td><td>could</td><td><i>“I can help.”</i> → <i>He said he <b>could</b> help.</i></td></tr>
<tr><td>may</td><td>might</td><td><i>“It may rain.”</i> → <i>She said it <b>might</b> rain.</i></td></tr>
<tr><td>must / have to</td><td>had to</td><td><i>“I must go.”</i> → <i>He said he <b>had to</b> go.</i></td></tr>
</table>

<h3>Указатели времени и места</h3>
<table>
<tr><th>Прямая</th><th>Косвенная</th><th>Пример</th></tr>
<tr><td>today</td><td>that day</td><td><i>“I am free today.”</i> → <i>…he was free <b>that day</b>.</i></td></tr>
<tr><td>tomorrow</td><td>the next / following day</td><td><i>“I'll call tomorrow.”</i> → <i>…he would call <b>the next day</b>.</i></td></tr>
<tr><td>yesterday</td><td>the day before</td><td><i>“I came yesterday.”</i> → <i>…he had come <b>the day before</b>.</i></td></tr>
<tr><td>now</td><td>then</td><td><i>“I need it now.”</i> → <i>…he needed it <b>then</b>.</i></td></tr>
<tr><td>here</td><td>there</td><td><i>“Stay here.”</i> → <i>…to stay <b>there</b>.</i></td></tr>
<tr><td>this / these</td><td>that / those</td><td><i>“I like this book.”</i> → <i>…he liked <b>that</b> book.</i></td></tr>
<tr><td>ago</td><td>before</td><td><i>“I met her 2 days ago.”</i> → <i>…he had met her 2 days <b>before</b>.</i></td></tr>
</table>

<h3>say / tell / ask</h3>
<ul>
<li><b>say</b> — без адресата или say to someone: <i>He said (that)…</i></li>
<li><b>tell</b> — обязательно кому: <i>He <b>told me</b> that…</i> (не He told that…)</li>
<li><b>ask</b> — вопрос: <i>He asked if / whether…</i> · <i>She asked <b>where</b> I lived.</i></li>
</ul>
<p><b>Вопросы в косвенной речи:</b> порядок слов как в утверждении, без do/does/did.<br>
<i>“Where do you live?”</i> → <i>He asked where I <b>lived</b>.</i> (не where did I live)<br>
<i>“Are you ready?”</i> → <i>She asked <b>if</b> I was ready.</i></p>

<h3>Приказы и просьбы</h3>
<p><i>“Open the door,” he said.</i> → <i>He told me <b>to open</b> the door.</i><br>
<i>“Don't be late,” she said.</i> → <i>She told me <b>not to be</b> late.</i></p>
<div class="warn-box">Если вводящий глагол в Present (<i>He says…</i>) — сдвиг времён часто <b>не нужен</b>. Сдвиг типичен после said / told / asked (Past).</div>`,

'english|Conditionals': `
<h3>Что такое условные</h3>
<p>Предложения с <b>if</b>: «если…, то…». На КТА нужно узнать тип по смыслу и поставить правильные формы.</p>

<h3>Четыре типа</h3>
<table>
<tr><th>Тип</th><th>If-часть</th><th>Главная</th><th>Смысл</th></tr>
<tr><td><b>Zero</b></td><td>Present Simple</td><td>Present Simple</td><td>всегда правда, законы природы</td></tr>
<tr><td><b>First</b></td><td>Present Simple</td><td>will + V1</td><td>реальное / вероятное будущее</td></tr>
<tr><td><b>Second</b></td><td>Past Simple</td><td>would + V1</td><td>нереально сейчас / маловероятно</td></tr>
<tr><td><b>Third</b></td><td>Past Perfect</td><td>would have + V3</td><td>нереальное прошлое (уже не изменить)</td></tr>
</table>

<h3>Zero Conditional</h3>
<p><i>If you <b>heat</b> ice, it <b>melts</b>.</i><br>
<i>If people <b>don't drink</b> water, they <b>die</b>.</i></p>
<p>Можно заменить if на <b>when</b>: <i>When you heat ice, it melts.</i></p>

<h3>First Conditional</h3>
<p><i>If it <b>rains</b> tomorrow, I <b>will stay</b> home.</i><br>
<i>If you <b>study</b> hard, you <b>will pass</b> the exam.</i><br>
<i>If she <b>doesn't hurry</b>, she <b>will miss</b> the bus.</i></p>
<div class="warn-box">После <b>if</b> никогда не ставь will: неверно <i>If it will rain…</i> Верно: <i>If it <b>rains</b>…</i></div>

<h3>Second Conditional</h3>
<p><i>If I <b>were</b> rich, I <b>would travel</b> the world.</i><br>
<i>If I <b>had</b> more time, I <b>would learn</b> French.</i><br>
<i>If he <b>lived</b> closer, we <b>would meet</b> more often.</i></p>
<p>Для всех лиц в if-части часто <b>were</b> (не was): <i>If I <b>were</b> you, I would accept the job.</i></p>

<h3>Third Conditional</h3>
<p><i>If I <b>had studied</b>, I <b>would have passed</b>.</i> (но я не учился → не сдал)<br>
<i>If she <b>had left</b> earlier, she <b>wouldn't have missed</b> the train.</i><br>
<i>If we <b>had known</b>, we <b>would have helped</b>.</i></p>

<h3>Как быстро выбрать тип</h3>
<ol>
<li>Всегда / научный факт? → Zero</li>
<li>Реально может случиться в будущем? → First</li>
<li>Мечта / нереально сейчас? → Second</li>
<li>Жалеем о прошлом? → Third</li>
</ol>
<p><b>Смешанный пример для тренировки:</b><br>
<i>If I <b>were</b> you (Second), I <b>wouldn't buy</b> this phone.</i><br>
<i>If you <b>heat</b> water to 100°C (Zero), it <b>boils</b>.</i><br>
<i>If I <b>had woken</b> up earlier (Third), I <b>wouldn't have been</b> late.</i></p>`,

'english|Modal Verbs': `
<h3>Что такое модальные</h3>
<p>Модальные глаголы добавляют смысл: умение, обязанность, совет, вероятность. После них обычно <b>V1 без to</b>: <i>can swim</i>, не <i>can to swim</i> (исключение: have to, need to, ought to).</p>

<h3>Таблица значений</h3>
<table>
<tr><th>Модал</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>can</b></td><td>умение, возможность сейчас</td><td><i>I can swim. / Can you help me?</i></td></tr>
<tr><td><b>could</b></td><td>умение в прошлом / вежливая просьба / менее уверенно</td><td><i>I could swim when I was 5. / Could you open the window?</i></td></tr>
<tr><td><b>may</b></td><td>разрешение / вероятность</td><td><i>May I come in? / It may rain later.</i></td></tr>
<tr><td><b>might</b></td><td>меньшая вероятность</td><td><i>She might be at home.</i></td></tr>
<tr><td><b>must</b></td><td>сильная обязанность ИЛИ уверенное предположение</td><td><i>You must wear a seatbelt. / You must be tired.</i></td></tr>
<tr><td><b>have to</b></td><td>вынужденная обязанность (правила, ситуация)</td><td><i>I have to work tomorrow.</i></td></tr>
<tr><td><b>should / ought to</b></td><td>совет</td><td><i>You should study more.</i></td></tr>
<tr><td><b>need / need to</b></td><td>необходимость</td><td><i>You need to rest.</i></td></tr>
<tr><td><b>will</b></td><td>будущее, обещание, спонтанное решение</td><td><i>I will call you later.</i></td></tr>
<tr><td><b>would</b></td><td>вежливость, гипотеза</td><td><i>Would you like some tea?</i></td></tr>
</table>

<h3>must vs have to</h3>
<ul>
<li><b>must</b> — часто личное чувство долга / правило от говорящего: <i>I must stop smoking.</i></li>
<li><b>have to</b> — внешняя необходимость: <i>Students have to wear uniforms.</i></li>
<li>В прошлом обычно только <b>had to</b>: <i>I had to leave early yesterday.</i></li>
</ul>

<h3>mustn't vs don't have to — критично!</h3>
<table>
<tr><th></th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>mustn't</b></td><td>запрет: нельзя</td><td><i>You mustn't smoke here.</i></td></tr>
<tr><td><b>don't have to</b></td><td>не обязан (можно не делать)</td><td><i>You don't have to come if you're busy.</i></td></tr>
</table>

<h3>Вероятность</h3>
<ul>
<li><b>must</b> ≈ почти уверен: <i>He must be at work — his car is here.</i></li>
<li><b>may / might / could</b> ≈ возможно: <i>She might be late.</i></li>
<li><b>can't</b> ≈ невозможно: <i>That can't be true!</i></li>
</ul>
<p><b>Ещё примеры:</b><br>
<i>You <b>should</b> see a doctor.</i> (совет)<br>
<i>You <b>must</b> finish the report by Friday.</i> (обязательно)<br>
<i>You <b>don't have to</b> finish it today.</i> (не обязательно сегодня)<br>
<i>I <b>can't</b> speak Chinese, but I <b>can</b> speak English.</i></p>
<div class="warn-box">После modal — голый инфинитив: <i>She can <b>drive</b>.</i> Не: <i>can drives / can to drive</i>. Исключения с to: have <b>to</b>, need <b>to</b>, ought <b>to</b>.</div>`,

'english|Gerund & Infinitive': `
<h3>Две формы</h3>
<ul>
<li><b>Gerund</b> = V-ing (как «существительное»): <i>reading, swimming</i></li>
<li><b>Infinitive</b> = to + V1: <i>to read, to swim</i></li>
</ul>
<p>На КТА часто спрашивают: что поставить после глагола — <b>-ing</b> или <b>to</b>.</p>

<h3>Только Gerund (V-ing)</h3>
<p>enjoy, like*, love*, hate*, mind, finish, stop*, suggest, avoid, keep, practise, consider, admit, deny, miss, imagine, involve, delay, risk</p>
<ul>
<li><i>I enjoy <b>reading</b> books.</i></li>
<li><i>She finished <b>writing</b> the essay.</i></li>
<li><i>Would you mind <b>closing</b> the window?</i></li>
<li><i>He suggested <b>going</b> to the cinema.</i></li>
<li><i>I avoided <b>talking</b> about politics.</i></li>
</ul>

<h3>Только Infinitive (to + V1)</h3>
<p>want, decide, hope, promise, need, plan, learn, offer, agree, refuse, expect, afford, manage, fail, arrange, prepare, seem, appear</p>
<ul>
<li><i>She wants <b>to travel</b>.</i></li>
<li><i>I decided <b>to stay</b> home.</i></li>
<li><i>He promised <b>to help</b> me.</i></li>
<li><i>We hope <b>to pass</b> the exam.</i></li>
<li><i>I can't afford <b>to buy</b> a car.</i></li>
</ul>

<h3>Оба возможны — но смысл может меняться</h3>
<table>
<tr><th>Пара</th><th>Gerund</th><th>Infinitive</th></tr>
<tr><td>stop</td><td><i>stop <b>smoking</b></i> = бросить курить</td><td><i>stop <b>to smoke</b></i> = остановиться, чтобы покурить</td></tr>
<tr><td>remember</td><td><i>remember <b>doing</b></i> = помню, что делал</td><td><i>remember <b>to do</b></i> = не забудь сделать</td></tr>
<tr><td>forget</td><td><i>forget <b>doing</b></i> = забыл, что делал</td><td><i>forget <b>to do</b></i> = забыл сделать</td></tr>
<tr><td>try</td><td><i>try <b>doing</b></i> = попробовать способ</td><td><i>try <b>to do</b></i> = пытаться / стараться</td></tr>
<tr><td>regret</td><td><i>regret <b>doing</b></i> = жалеть о сделанном</td><td><i>regret <b>to say</b></i> = с сожалением сообщаю</td></tr>
</table>
<p><i>I remembered <b>locking</b> the door.</i> (помню, что закрыл)<br>
<i>Remember <b>to lock</b> the door!</i> (не забудь закрыть)</p>

<h3>После предлога — всегда -ing</h3>
<p><i>She is good <b>at playing</b> tennis.</i><br>
<i>I'm interested <b>in learning</b> English.</i><br>
<i>He left without <b>saying</b> goodbye.</i><br>
<i>I look forward <b>to meeting</b> you.</i> (to здесь предлог!)</p>
<div class="warn-box">Запомни списки want/decide/hope → to; enjoy/finish/mind/suggest → -ing. И: после предлога всегда -ing.</div>`,

'english|Irregular Verbs': `
<h3>Зачем это нужно</h3>
<p><b>V1</b> — словарьная форма (Present / после modal).<br>
<b>V2</b> — Past Simple.<br>
<b>V3</b> — Present/Past Perfect и Passive (be + V3).</p>
<p><i>I <b>go</b> to school.</i> (V1)<br>
<i>I <b>went</b> yesterday.</i> (V2)<br>
<i>I have <b>gone</b> already. / The letter was <b>written</b>.</i> (V3)</p>

<h3>Частые неправильные глаголы</h3>
<table>
<tr><th>V1</th><th>V2</th><th>V3</th><th>Перевод</th><th>Пример</th></tr>
<tr><td>be</td><td>was/were</td><td>been</td><td>быть</td><td><i>She has been here.</i></td></tr>
<tr><td>become</td><td>became</td><td>become</td><td>становиться</td><td><i>He became a doctor.</i></td></tr>
<tr><td>begin</td><td>began</td><td>begun</td><td>начинать</td><td><i>The film has begun.</i></td></tr>
<tr><td>break</td><td>broke</td><td>broken</td><td>ломать</td><td><i>The window was broken.</i></td></tr>
<tr><td>bring</td><td>brought</td><td>brought</td><td>приносить</td><td><i>She brought a gift.</i></td></tr>
<tr><td>buy</td><td>bought</td><td>bought</td><td>покупать</td><td><i>I bought a phone.</i></td></tr>
<tr><td>catch</td><td>caught</td><td>caught</td><td>ловить</td><td><i>He caught the ball.</i></td></tr>
<tr><td>choose</td><td>chose</td><td>chosen</td><td>выбирать</td><td><i>We have chosen a hotel.</i></td></tr>
<tr><td>come</td><td>came</td><td>come</td><td>приходить</td><td><i>They came late.</i></td></tr>
<tr><td>do</td><td>did</td><td>done</td><td>делать</td><td><i>Have you done it?</i></td></tr>
<tr><td>drink</td><td>drank</td><td>drunk</td><td>пить</td><td><i>He drank the juice.</i></td></tr>
<tr><td>drive</td><td>drove</td><td>driven</td><td>водить</td><td><i>She has driven for years.</i></td></tr>
<tr><td>eat</td><td>ate</td><td>eaten</td><td>есть</td><td><i>We ate pizza.</i></td></tr>
<tr><td>find</td><td>found</td><td>found</td><td>находить</td><td><i>I found my keys.</i></td></tr>
<tr><td>get</td><td>got</td><td>got/gotten</td><td>получать</td><td><i>I got your message.</i></td></tr>
<tr><td>give</td><td>gave</td><td>given</td><td>давать</td><td><i>He gave me a book.</i></td></tr>
<tr><td>go</td><td>went</td><td>gone</td><td>идти</td><td><i>She went home.</i></td></tr>
<tr><td>have</td><td>had</td><td>had</td><td>иметь</td><td><i>We had lunch.</i></td></tr>
<tr><td>know</td><td>knew</td><td>known</td><td>знать</td><td><i>I have known her for years.</i></td></tr>
<tr><td>leave</td><td>left</td><td>left</td><td>уходить</td><td><i>They left early.</i></td></tr>
<tr><td>make</td><td>made</td><td>made</td><td>делать</td><td><i>She made a cake.</i></td></tr>
<tr><td>read</td><td>read</td><td>read</td><td>читать</td><td><i>I read it yesterday.</i></td></tr>
<tr><td>see</td><td>saw</td><td>seen</td><td>видеть</td><td><i>Have you seen this?</i></td></tr>
<tr><td>speak</td><td>spoke</td><td>spoken</td><td>говорить</td><td><i>He spoke clearly.</i></td></tr>
<tr><td>take</td><td>took</td><td>taken</td><td>брать</td><td><i>She took a photo.</i></td></tr>
<tr><td>tell</td><td>told</td><td>told</td><td>рассказывать</td><td><i>He told me the truth.</i></td></tr>
<tr><td>think</td><td>thought</td><td>thought</td><td>думать</td><td><i>I thought about it.</i></td></tr>
<tr><td>write</td><td>wrote</td><td>written</td><td>писать</td><td><i>The letter was written.</i></td></tr>
<tr><td>feel</td><td>felt</td><td>felt</td><td>чувствовать</td><td><i>I felt tired.</i></td></tr>
<tr><td>keep</td><td>kept</td><td>kept</td><td>хранить</td><td><i>She kept the secret.</i></td></tr>
<tr><td>send</td><td>sent</td><td>sent</td><td>отправлять</td><td><i>I sent an email.</i></td></tr>
<tr><td>sleep</td><td>slept</td><td>slept</td><td>спать</td><td><i>He slept well.</i></td></tr>
<tr><td>teach</td><td>taught</td><td>taught</td><td>учить</td><td><i>She taught English.</i></td></tr>
<tr><td>understand</td><td>understood</td><td>understood</td><td>понимать</td><td><i>I understood the rule.</i></td></tr>
</table>
<div class="warn-box">Не путай пары: <i>went / gone</i>, <i>saw / seen</i>, <i>wrote / written</i>, <i>drank / drunk</i>, <i>began / begun</i>. В Perfect и Passive — только V3.</div>`,

'english|Articles': `
<h3>Три варианта</h3>
<p><b>a/an</b> — неопределённый (один из многих, впервые).<br>
<b>the</b> — определённый (известно какой / единственный).<br>
<b>−</b> (нулевой) — артикля нет.</p>

<h3>a / an</h3>
<ul>
<li>Перед согласным <b>звуком</b>: <i>a book, a car, a university</i> ([ju])</li>
<li>Перед гласным <b>звуком</b>: <i>an apple, an hour</i> (h немое), <i>an MBA</i> ([em])</li>
<li>Профессия: <i>She is <b>a</b> teacher. He is <b>an</b> engineer.</i></li>
<li>Впервые: <i>I saw <b>a</b> dog. <b>The</b> dog was black.</i> (второй раз — the)</li>
</ul>

<h3>the</h3>
<ul>
<li>Уже известно / упомянуто: <i>Open <b>the</b> door.</i> (конкретную)</li>
<li>Единственные: <i><b>the</b> sun, the moon, the Earth, the sky</i></li>
<li>Суперлатив: <i><b>the</b> best student, the tallest building</i></li>
<li>Порядковые: <i><b>the</b> first, the second</i></li>
<li>Реки, моря, горные цепи, пустыни: <i>the Thames, the Alps, the Pacific, the Sahara</i></li>
<li>Страны во мн.ч. / с Republic/Kingdom: <i>the USA, the UK, the Netherlands</i></li>
</ul>

<h3>Нулевой артикль (−)</h3>
<ul>
<li>Имена: <i>Anna, Nursultan</i></li>
<li>Города, большинство стран: <i>Astana, Kazakhstan, France</i></li>
<li>Языки, школьные предметы: <i>English, mathematics</i></li>
<li>Еда/напитки вообще: <i>Milk is healthy. I like tea.</i></li>
<li>Спорт: <i>He plays football.</i></li>
<li>Приёмы пищи: <i>after breakfast, at lunch</i></li>
</ul>

<h3>Примеры-контрасты</h3>
<p><i>I like <b>−</b> music.</i> (музыка вообще) · <i>I liked <b>the</b> music at the party.</i> (конкретная)<br>
<i>She goes to <b>−</b> school.</i> (как ученица) · <i>Her mum went to <b>the</b> school.</i> (в здание)<br>
<i><b>The</b> rich should help <b>the</b> poor.</i> (группы людей)</p>
<div class="warn-box">Смотри на <b>звук</b>, не букву: <i>an hour</i>, <i>a European</i>, <i>an honest man</i>, <i>a one-way street</i> ([w]).</div>`,

'english|Prepositions': `
<h3>Время: in / on / at</h3>
<table>
<tr><th>Предлог</th><th>Когда</th><th>Примеры</th></tr>
<tr><td><b>at</b></td><td>точный час, праздник-момент, night</td><td><i>at 5 o'clock, at noon, at midnight, at night, at the weekend (BrE)</i></td></tr>
<tr><td><b>on</b></td><td>день, дата</td><td><i>on Monday, on 5 May, on my birthday, on Christmas Day</i></td></tr>
<tr><td><b>in</b></td><td>месяц, год, сезон, части суток</td><td><i>in July, in 2020, in summer, in the morning/afternoon/evening</i></td></tr>
</table>
<p><i>The meeting is <b>at</b> 10 <b>on</b> Friday <b>in</b> March.</i></p>

<h3>Место: in / on / at</h3>
<ul>
<li><b>in</b> — внутри / город / страна: <i>in the room, in Almaty, in Kazakhstan</i></li>
<li><b>on</b> — на поверхности: <i>on the table, on the wall, on the second floor</i></li>
<li><b>at</b> — точка / учреждение как место встречи: <i>at the bus stop, at home, at school, at the door</i></li>
</ul>

<h3>Другие важные предлоги</h3>
<table>
<tr><th>Предлог</th><th>Смысл</th><th>Пример</th></tr>
<tr><td>between</td><td>между двумя</td><td><i>between A and B</i></td></tr>
<tr><td>among</td><td>среди многих</td><td><i>among friends</i></td></tr>
<tr><td>into</td><td>движение внутрь</td><td><i>go into the room</i></td></tr>
<tr><td>onto</td><td>движение на поверхность</td><td><i>jump onto the bed</i></td></tr>
<tr><td>through</td><td>сквозь</td><td><i>through the forest</i></td></tr>
<tr><td>across</td><td>с одной стороны на другую</td><td><i>across the street</i></td></tr>
<tr><td>for</td><td>отрезок времени</td><td><i>for 3 years</i></td></tr>
<tr><td>since</td><td>с момента</td><td><i>since 2019</i></td></tr>
<tr><td>during</td><td>в течение события</td><td><i>during the lesson</i></td></tr>
<tr><td>by</td><td>к сроку / способ</td><td><i>by Friday / by bus</i></td></tr>
<tr><td>from … to</td><td>от … до</td><td><i>from 9 to 5</i></td></tr>
<tr><td>over / under</td><td>над / под</td><td><i>over the bridge / under the table</i></td></tr>
<tr><td>next to / near</td><td>рядом</td><td><i>next to the bank</i></td></tr>
</table>

<h3>Устойчивые сочетания (часто на тесте)</h3>
<ul>
<li>interested <b>in</b> · good <b>at</b> · bad <b>at</b></li>
<li>afraid <b>of</b> · proud <b>of</b> · tired <b>of</b> · full <b>of</b></li>
<li>depend <b>on</b> · rely <b>on</b> · insist <b>on</b></li>
<li>listen <b>to</b> · belong <b>to</b> · happen <b>to</b></li>
<li>look <b>for</b> · wait <b>for</b> · pay <b>for</b> · ask <b>for</b></li>
<li>believe <b>in</b> · succeed <b>in</b> · consist <b>of</b></li>
<li>married <b>to</b> · similar <b>to</b> · different <b>from</b></li>
</ul>
<p><i>He is afraid <b>of</b> spiders.</i> · <i>She is good <b>at</b> maths.</i> · <i>It depends <b>on</b> the weather.</i></p>
<div class="warn-box">Памятка времени: <b>at</b> (час) · <b>on</b> (день) · <b>in</b> (месяц/год). Исключение: <b>at night</b>, но <b>in the morning</b>.</div>`,

'english|Comparative & Superlative': `
<h3>Три степени</h3>
<ul>
<li><b>Positive</b> — обычное: tall, beautiful</li>
<li><b>Comparative</b> — сравнение двух: taller, more beautiful</li>
<li><b>Superlative</b> — самый среди многих: the tallest, the most beautiful</li>
</ul>

<h3>Правила образования</h3>
<table>
<tr><th>Тип</th><th>Positive</th><th>Comparative</th><th>Superlative</th></tr>
<tr><td>1 слог</td><td>tall / big / nice</td><td>taller / bigger / nicer</td><td>the tallest / biggest / nicest</td></tr>
<tr><td>на -y</td><td>happy / easy</td><td>happier / easier</td><td>the happiest / easiest</td></tr>
<tr><td>2+ слога</td><td>beautiful / interesting</td><td>more beautiful</td><td>the most beautiful</td></tr>
<tr><td>исключения</td><td>good / bad / far / little / many</td><td>better / worse / farther(further) / less / more</td><td>the best / worst / farthest / least / most</td></tr>
</table>

<h3>Примеры</h3>
<ul>
<li><i>A car is <b>faster than</b> a bicycle.</i></li>
<li><i>This book is <b>more interesting than</b> that one.</i></li>
<li><i>This is <b>the best</b> film I have ever seen.</i></li>
<li><i>She is <b>the tallest</b> girl in the class.</i></li>
<li><i>Today is <b>hotter than</b> yesterday.</i></li>
</ul>

<h3>Полезные конструкции</h3>
<ul>
<li><b>as … as</b> — такой же: <i>He is as tall as his brother.</i></li>
<li><b>not as … as</b> — не такой: <i>This bag is not as heavy as that one.</i></li>
<li><b>The + comparative, the + comparative</b>: <i><b>The more</b> you practise, <b>the better</b> you become.</i></li>
<li><b>than me / than I am</b>: <i>She is older than me.</i></li>
</ul>

<h3>Правописание</h3>
<ul>
<li>big → bi<b>gg</b>er (короткая гласная + одна согласная → удваиваем)</li>
<li>nice → nic<b>er</b> (немое -e: просто +r)</li>
<li>happy → happ<b>i</b>er (y → i после согласной)</li>
</ul>
<div class="warn-box">Не мешай формы: не <i>more taller</i> и не <i>the most tallest</i>. Либо -er/-est, либо more/most.</div>`,

'english|Phrasal Verbs': `
<h3>Что это</h3>
<p>Глагол + частица (часто предлог/наречие). Смысл <b>не всегда</b> = сумма частей: <i>give up</i> ≠ «дать вверх», а «бросить».</p>

<h3>Частые на КТА</h3>
<table>
<tr><th>Фразовый</th><th>Значение</th><th>Пример</th></tr>
<tr><td>look after</td><td>заботиться</td><td><i>She looks after her little brother.</i></td></tr>
<tr><td>look for</td><td>искать</td><td><i>I'm looking for my keys.</i></td></tr>
<tr><td>look up</td><td>искать (в словаре / справочнике)</td><td><i>Look up this word in the dictionary.</i></td></tr>
<tr><td>look forward to</td><td>ждать с нетерпением</td><td><i>I look forward to seeing you.</i></td></tr>
<tr><td>give up</td><td>бросать, сдаваться</td><td><i>Don't give up learning English!</i></td></tr>
<tr><td>turn on / turn off</td><td>включить / выключить</td><td><i>Please turn off the lights.</i></td></tr>
<tr><td>turn up</td><td>появиться / сделать громче</td><td><i>He turned up late. / Turn up the music.</i></td></tr>
<tr><td>turn down</td><td>отклонить / сделать тише</td><td><i>She turned down the job offer.</i></td></tr>
<tr><td>put on</td><td>надеть</td><td><i>Put on your coat — it's cold.</i></td></tr>
<tr><td>take off</td><td>снять (одежду) / взлететь</td><td><i>Take off your shoes. / The plane took off.</i></td></tr>
<tr><td>wake up</td><td>просыпаться</td><td><i>I wake up at 7 every day.</i></td></tr>
<tr><td>find out</td><td>выяснить, узнать</td><td><i>I found out the truth yesterday.</i></td></tr>
<tr><td>go on</td><td>продолжать</td><td><i>Please go on with your story.</i></td></tr>
<tr><td>put off</td><td>отложить</td><td><i>They put off the meeting until Friday.</i></td></tr>
<tr><td>pick up</td><td>поднять / заехать за кем-то</td><td><i>I'll pick you up at 6.</i></td></tr>
<tr><td>run out of</td><td>закончиться</td><td><i>We've run out of milk.</i></td></tr>
<tr><td>break down</td><td>сломаться</td><td><i>My car broke down on the way.</i></td></tr>
<tr><td>get on / get off</td><td>сесть / выйти (транспорт)</td><td><i>Get on the bus. Get off at the next stop.</i></td></tr>
</table>

<h3>Не путай look…</h3>
<ul>
<li><i>look <b>after</b> children</i> — заботиться</li>
<li><i>look <b>for</b> a job</i> — искать</li>
<li><i>look <b>up</b> a word</i> — найти в словаре</li>
<li><i>look <b>forward to</b> the weekend</i> — ждать с радостью (+ всегда -ing: looking forward to <b>meeting</b>)</li>
</ul>
<div class="warn-box">Учи фразовые <b>целиком</b> с примером. Угадывать по отдельным словам опасно: turn down ≠ «повернуть вниз».</div>`,

'english|Relative Clauses': `
<h3>Что это</h3>
<p>Придаточное, которое уточняет существительное: «человек, <b>который…</b>», «книга, <b>которую…</b>».</p>
<p><i>The man <b>who called you</b> is my teacher.</i><br>
<i>This is the book <b>that I told you about</b>.</i></p>

<h3>Местоимения</h3>
<table>
<tr><th>Слово</th><th>К чему</th><th>Пример</th></tr>
<tr><td><b>who</b></td><td>люди (подлежащее / иногда объект)</td><td><i>The woman who lives next door is a doctor.</i></td></tr>
<tr><td><b>which</b></td><td>вещи, животные</td><td><i>The film which we watched was great.</i></td></tr>
<tr><td><b>that</b></td><td>люди или вещи (в defining)</td><td><i>The car that I drive is old.</i></td></tr>
<tr><td><b>whose</b></td><td>чей / чья / чьё</td><td><i>The girl whose bag is red is my sister.</i></td></tr>
<tr><td><b>where</b></td><td>место</td><td><i>This is the city where I was born.</i></td></tr>
<tr><td><b>when</b></td><td>время</td><td><i>I remember the day when we met.</i></td></tr>
<tr><td><b>why</b></td><td>причина</td><td><i>That's the reason why I left.</i></td></tr>
<tr><td><b>whom</b></td><td>человек-объект (формально)</td><td><i>The man whom I met…</i> (часто who/that)</td></tr>
</table>

<h3>Defining vs Non-defining</h3>
<ul>
<li><b>Defining</b> — нужно, чтобы понять о ком речь. Без запятых. that можно.<br>
<i>Students <b>who study hard</b> pass the exam.</i></li>
<li><b>Non-defining</b> — доп. информация. Запятые обязательны. <b>that нельзя</b>.<br>
<i>Astana, <b>which is the capital</b>, is modern.</i><br>
<i>My brother, <b>who lives in London</b>, is an engineer.</i></li>
</ul>

<h3>Можно ли опустить местоимение</h3>
<p>Если оно <b>объект</b> в defining-clause — часто можно:<br>
<i>The book (that/which) I bought is new.</i><br>
Если <b>подлежащее</b> — нельзя опускать:<br>
<i>The man <b>who</b> called is here.</i> (не The man called is here в этом смысле)</p>
<div class="warn-box">who = люди · which = вещи · that = и то и другое в defining. После запятой that не ставь.</div>`,

'english|Subject-Verb Agreement': `
<h3>Главное правило</h3>
<p>Подлежащее и сказуемое должны совпадать в числе.</p>
<table>
<tr><th>Подлежащее</th><th>Present Simple</th><th>Пример</th></tr>
<tr><td>I / you / we / they</td><td>V1</td><td><i>They work hard.</i></td></tr>
<tr><td>he / she / it</td><td>V+s / V+es</td><td><i>He works hard. She watches TV.</i></td></tr>
</table>
<p><i>The students <b>are</b> happy.</i> · <i>The student <b>is</b> happy.</i></p>

<h3>Сложные случаи (часто на тесте)</h3>
<table>
<tr><th>Правило</th><th>Верно</th><th>Неверно</th></tr>
<tr><td>everybody / someone / nobody / each → ед.ч.</td><td><i>Everybody <b>knows</b> the answer.</i></td><td><i>Everybody know…</i></td></tr>
<tr><td>people / police / cattle → мн.ч.</td><td><i>People <b>are</b> waiting.</i></td><td><i>People is…</i></td></tr>
<tr><td>news / mathematics / physics / measles → ед.ч.</td><td><i>The news <b>is</b> good.</i></td><td><i>The news are…</i></td></tr>
<tr><td>There is + ед. / There are + мн.</td><td><i>There <b>is</b> a book. There <b>are</b> books.</i></td><td><i>There is books…</i></td></tr>
<tr><td>A number of + мн.ч.</td><td><i>A number of students <b>are</b> absent.</i></td><td><i>A number … is</i> (обычно)</td></tr>
<tr><td>The number of + ед.ч.</td><td><i>The number of students <b>is</b> 30.</i></td><td><i>The number … are</i></td></tr>
<tr><td>Neither A nor B — глагол ближе к B</td><td><i>Neither he nor they <b>are</b> ready.</i></td><td>—</td></tr>
<tr><td>Смотри на подлежащее, не на слова между</td><td><i>The list of items <b>is</b> long.</i></td><td><i>The list of items are…</i></td></tr>
</table>

<h3>Ещё примеры</h3>
<ul>
<li><i>Someone <b>has</b> left a bag.</i></li>
<li><i>Neither of the answers <b>is</b> correct.</i> (часто ед.ч.)</li>
<li><i>My family <b>is</b> big.</i> (как целое) / <i>My family <b>are</b> arguing.</i> (члены семьи, BrE)</li>
<li><i>Ten dollars <b>is</b> enough.</i> (сумма как одно целое)</li>
<li><i>One of my friends <b>lives</b> abroad.</i></li>
</ul>
<div class="warn-box">Ошибка №1: <i>He work</i> / <i>They works</i>. Ошибка №2: согласовать глагол с ближайшим существительным, а не с настоящим подлежащим.</div>`,

'english|Vocabulary': `
<h3>Как учить слова к КТА</h3>
<p>Часто просят <b>синоним</b>, <b>антоним</b> или правильное слово в контексте (make/do, academic words).</p>

<h3>Синонимы</h3>
<table>
<tr><th>Слово</th><th>Синоним</th><th>Пример</th></tr>
<tr><td>important</td><td>essential, significant, crucial</td><td><i>Education is essential for success.</i></td></tr>
<tr><td>big / huge</td><td>enormous, vast, massive</td><td><i>They live in an enormous house.</i></td></tr>
<tr><td>get</td><td>obtain, receive, acquire</td><td><i>She obtained a visa.</i></td></tr>
<tr><td>buy</td><td>purchase</td><td><i>You can purchase tickets online.</i></td></tr>
<tr><td>help</td><td>assist, aid, support</td><td><i>Can you assist me with this?</i></td></tr>
<tr><td>improve</td><td>enhance, develop, boost</td><td><i>Practice enhances your skills.</i></td></tr>
<tr><td>start</td><td>begin, commence</td><td><i>The course begins in September.</i></td></tr>
<tr><td>show</td><td>demonstrate, indicate, reveal</td><td><i>The results indicate progress.</i></td></tr>
<tr><td>need</td><td>require</td><td><i>This job requires experience.</i></td></tr>
<tr><td>enough</td><td>sufficient, adequate</td><td><i>We have sufficient time.</i></td></tr>
</table>

<h3>Антонимы</h3>
<table>
<tr><th>Слово</th><th>Антоним</th></tr>
<tr><td>good</td><td>bad</td></tr>
<tr><td>increase</td><td>decrease / reduce</td></tr>
<tr><td>expensive</td><td>cheap / inexpensive</td></tr>
<tr><td>accept</td><td>refuse / reject</td></tr>
<tr><td>arrive</td><td>depart / leave</td></tr>
<tr><td>success</td><td>failure</td></tr>
<tr><td>modern</td><td>traditional / ancient</td></tr>
<tr><td>include</td><td>exclude</td></tr>
<tr><td>appear</td><td>disappear</td></tr>
<tr><td>safe</td><td>dangerous</td></tr>
</table>

<h3>make или do</h3>
<table>
<tr><th>make</th><th>do</th></tr>
<tr><td>make a mistake</td><td>do homework</td></tr>
<tr><td>make a decision</td><td>do a favour</td></tr>
<tr><td>make a noise</td><td>do business</td></tr>
<tr><td>make money</td><td>do the washing</td></tr>
<tr><td>make progress</td><td>do research</td></tr>
<tr><td>make an effort</td><td>do one's best</td></tr>
</table>
<p><i>He <b>made</b> a serious mistake.</i> · <i>I need to <b>do</b> my homework.</i></p>

<h3>Academic words</h3>
<p><b>analyze</b> — анализировать · <b>concept</b> — понятие · <b>data</b> — данные · <b>factor</b> — фактор<br>
<b>method</b> — метод · <b>research</b> — исследование · <b>significant</b> — значительный · <b>theory</b> — теория<br>
<b>evidence</b> — доказательство · <b>process</b> — процесс · <b>structure</b> — структура · <b>function</b> — функция<br>
<b>approach</b> — подход · <b>benefit</b> — польза · <b>issue</b> — проблема · <b>source</b> — источник</p>
<p><i>The research analyzes key factors that affect the process.</i></p>
<div class="warn-box">Учи пары: important↔essential, increase↔decrease, make a mistake / do homework. На тесте часто ловят именно на них.</div>`,

'english|Чтение (Reading)': `
<h3>Стратегия на экзамене</h3>
<ol>
<li><b>Сначала вопросы</b>, потом текст — сразу понятно, что искать.</li>
<li><b>Skimming</b> — быстро пробежаться глазами ради общей идеи (заголовок, первый/последний абзац).</li>
<li><b>Scanning</b> — искать конкретное: число, имя, дату, ключевое слово из вопроса.</li>
<li>Ответ <b>всегда опирается на текст</b>. Не подставляй «знания о мире», если в тексте иначе.</li>
</ol>

<h3>Типы вопросов и как решать</h3>
<table>
<tr><th>Тип</th><th>Что делать</th><th>Пример мышления</th></tr>
<tr><td>Main idea</td><td>О чём весь текст? Слишком узкий вариант — ловушка</td><td>«про одну деталь» ≠ главная идея</td></tr>
<tr><td>Detail</td><td>Найди абзац с фактом и сравни дословно/парафразом</td><td>цифры, имена, причины</td></tr>
<tr><td>Vocabulary in context</td><td>Подставь варианты в предложение</td><td>что значит слово <i>здесь</i></td></tr>
<tr><td>Inference</td><td>Вывод следует из текста, но не написан прямо</td><td>«из этого следует, что…»</td></tr>
<tr><td>NOT / EXCEPT</td><td>Три варианта есть в тексте — четвёртого нет</td><td>ищи отсутствующее</td></tr>
</table>

<h3>Полезные связки</h3>
<ul>
<li><b>Противопоставление:</b> however, although, whereas, on the contrary, nevertheless</li>
<li><b>Причина/следствие:</b> because, therefore, thus, as a result, consequently</li>
<li><b>Добавление:</b> moreover, furthermore, in addition, also</li>
<li><b>Пример:</b> for example, for instance, such as</li>
</ul>
<p>Слово <b>however</b> часто вводит главную мысль абзаца после контраста.</p>

<h3>Мини-пример</h3>
<p><i>Many people think online learning is less effective. <b>However</b>, recent studies show that well-designed courses can be as successful as classroom lessons.</i></p>
<ul>
<li>Main idea ≈ онлайн-курсы могут быть не хуже очных (не «многие думают, что хуже» — это только зачин).</li>
<li>Detail: «recent studies show…»</li>
</ul>
<div class="warn-box"><b>Ловушки:</b> вариант с теми же словами, что в тексте, часто неверный (word matching). Слова always / never / all / only — часто признак слишком категоричного (неверного) ответа.</div>`,

/* ===================== АЛГОРИТМЫ ===================== */
'algorithms|Основы, C и JavaScript': `
<h3>Алгоритм и его свойства</h3>
<p><b>Алгоритм</b> — конечная последовательность шагов, ведущая к решению задачи.</p>
<ul>
<li><b>Дискретность</b> — разбит на отдельные шаги</li>
<li><b>Определённость</b> — каждый шаг однозначен</li>
<li><b>Конечность (результативность)</b> — завершается за конечное число шагов</li>
<li><b>Массовость</b> — применим к целому классу задач</li>
<li><b>Понятность</b> — исполнитель умеет выполнить команды</li>
</ul>
<p><b>Программа</b> — алгоритм, записанный на языке, понятном компьютеру. <b>Блок-схема</b> — графическое представление алгоритма.</p>

<h3>Компилятор и интерпретатор</h3>
<ul>
<li><b>Компилятор</b> переводит весь код в машинный <i>заранее</i> (C, C++)</li>
<li><b>Интерпретатор</b> выполняет код построчно <i>во время работы</i> (Python, JS)</li>
</ul>

<h3>Язык C — что спрашивают чаще всего</h3>
<table>
<tr><th>Заголовочный файл</th><th>Что содержит</th></tr>
<tr><td>&lt;stdio.h&gt;</td><td>printf, scanf — ввод/вывод</td></tr>
<tr><td>&lt;stdlib.h&gt;</td><td>malloc, free — память</td></tr>
<tr><td>&lt;string.h&gt;</td><td>strlen, strcat, strcpy, strcmp</td></tr>
<tr><td>&lt;math.h&gt;</td><td>sqrt, pow, sin</td></tr>
<tr><td>&lt;assert.h&gt;</td><td>assert — <b>диагностика и отладка</b></td></tr>
<tr><td>&lt;errno.h&gt;</td><td>коды ошибок</td></tr>
</table>

<h4>Строки</h4>
<ul>
<li><b>strlen</b> — длина · <b>strcat</b> — присоединить · <b>strcpy</b> — копировать · <b>strcmp</b> — сравнить</li>
<li>Строка заканчивается нулевым символом <code>'\\0'</code>. strlen("hello") = 5</li>
</ul>

<h4>Указатели</h4>
<ul>
<li><b>&amp;x</b> — адрес переменной x</li>
<li><b>*p</b> — разыменование, значение по адресу p</li>
</ul>

<h4>Прочее</h4>
<p>Точка входа — функция <b>main()</b>. Типы: int (целое), float/double (вещественное), char (символ). Индексация массивов с <b>0</b>: в a[5] последний элемент a[4].</p>

<h3>Инкремент</h3>
<div class="warn-box"><b>++x</b> (префикс) — сначала увеличить, потом использовать. <b>x++</b> (постфикс) — сначала использовать, потом увеличить.<br>При x=5: <code>alert(++x)</code> покажет <b>6</b>, а <code>alert(x++)</code> покажет <b>5</b>.</div>

<h3>JavaScript</h3>
<ul>
<li><b>===</b> сравнивает значение <i>и</i> тип, <b>==</b> приводит типы</li>
<li><code>'5' + 3</code> = <b>"53"</b> (конкатенация строк), но <code>'5' - 3</code> = 2</li>
</ul>

<h3>Рекурсия</h3>
<p>Функция вызывает саму себя. Обязателен <b>базовый случай</b> — иначе бесконечный вызов и переполнение стека.</p>
<pre><code>int f(int n){
  if (n &lt;= 1) return 1;   // базовый случай
  return n * f(n - 1);     // факториал
}</code></pre>`,

'algorithms|Логика и системы счисления': `
<h3>Двоичная система</h3>
<p>Каждый разряд — степень двойки. Считаем справа налево: 1, 2, 4, 8, 16…</p>
<p><b>1011₂</b> = 1·8 + 0·4 + 1·2 + 1·1 = <b>11</b><br>
<b>1100₂</b> = 8 + 4 = <b>12</b></p>
<p>n битами можно закодировать <b>2ⁿ</b> значений: 3 бита → 8 комбинаций.</p>

<h3>Шестнадцатеричная</h3>
<p>Цифры 0–9, затем A=10, B=11, C=12, D=13, E=14, F=15.</p>
<p><b>1A₁₆</b> = 1·16 + 10 = <b>26</b></p>

<h3>Единицы информации</h3>
<p><b>Бит</b> — минимальная единица (0 или 1). <b>1 байт = 8 бит</b>. 1 Кбайт = 1024 байта.</p>

<h3>Логические операции</h3>
<table>
<tr><th>A</th><th>B</th><th>A &amp;&amp; B</th><th>A || B</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
</table>
<p><b>!</b> — отрицание: !true = false. Пример: (true &amp;&amp; false) || true = <b>true</b>.</p>

<h3>Побитовые операции</h3>
<p>Работают с каждым битом отдельно. <b>5 &amp; 3:</b> 101 &amp; 011 = 001 = <b>1</b>.</p>
<p><code>&amp;</code> И · <code>|</code> ИЛИ · <code>^</code> XOR · <code>&lt;&lt;</code> сдвиг влево (умножить на 2)</p>

<h3>Остаток от деления</h3>
<p><code>%</code> — остаток: 10 % 3 = <b>1</b>. Часто используется для проверки чётности: <code>n % 2 == 0</code>.</p>`,

'algorithms|Сложность и сортировки': `
<h3>O-нотация</h3>
<p><b>O-большое</b> описывает, как растёт время работы при увеличении n (оценка сверху, худший случай).</p>
<p>От лучшего к худшему:<br>
<b>O(1)</b> → O(log n) → O(n) → O(n log n) → O(n²) → O(2ⁿ) → O(n!)</p>
<ul>
<li><b>O(1)</b> — не зависит от n (доступ к элементу массива по индексу)</li>
<li><b>O(log n)</b> — данные каждый раз делятся пополам (бинарный поиск)</li>
<li><b>O(n)</b> — один проход (линейный поиск)</li>
<li><b>O(n²)</b> — два вложенных цикла</li>
</ul>
<p>Полиномиальные: n, n², n³. Экспоненциальная 2ⁿ и факториальная n! — непрактичны для больших n.</p>

<h3>Сортировки — сводная таблица</h3>
<table>
<tr><th>Алгоритм</th><th>Лучший</th><th>Средний</th><th>Худший</th><th>Память</th><th>Устойчива</th></tr>
<tr><td>Пузырьковая</td><td>O(n)*</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>да</td></tr>
<tr><td>Выбором</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>нет</td></tr>
<tr><td>Вставками</td><td><b>O(n)</b></td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>да</td></tr>
<tr><td><b>Быстрая (Quick)</b></td><td>O(n log n)</td><td>O(n log n)</td><td><b>O(n²)</b></td><td>O(log n)</td><td>нет</td></tr>
<tr><td><b>Слиянием (Merge)</b></td><td>O(n log n)</td><td>O(n log n)</td><td><b>O(n log n)</b></td><td><b>O(n)</b></td><td>да</td></tr>
<tr><td>Пирамидальная (Heap)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td><td>нет</td></tr>
</table>
<p class="muted">* с флагом досрочного выхода</p>

<div class="warn-box"><b>Три самых частых вопроса на КТА:</b><br>
1) У QuickSort в среднем O(n log n), но <b>в худшем O(n²)</b>.<br>
2) Гарантированное O(n log n) <i>и</i> устойчивость — только у <b>сортировки слиянием</b>, но она требует <b>O(n)</b> памяти.<br>
3) У сортировки <b>выбором</b> всегда O(n²) — даже на отсортированном массиве.</div>

<h3>Как работает каждая</h3>

<h4>Пузырьковая (bubble)</h4>
<p>Сравнивает <b>соседние</b> пары и меняет местами, если левый больше. За проход наибольший элемент «всплывает» в конец.</p>
<pre><code>[5, 2, 9, 1]
(5,2) → меняем  [2, 5, 9, 1]
(5,9) → нет     [2, 5, 9, 1]
(9,1) → меняем  [2, 5, 1, 9]  ← 9 на месте</code></pre>
<p>Сравнений в худшем случае: <b>n(n−1)/2</b>. Для n=5 это 10.</p>

<h4>Выбором (selection)</h4>
<p>Ищет <b>минимум</b> во всей неотсортированной части и ставит его в начало. Один обмен за проход.</p>
<pre><code>[64, 25, 12, 22, 11]
минимум 11 ↔ 64
[11, 25, 12, 22, 64]</code></pre>
<p>Обменов всего <b>n−1</b> — меньше всех. Но сравнений всегда O(n²).</p>

<h4>Вставками (insertion)</h4>
<p>Берёт очередной элемент и <b>вставляет</b> его на нужное место в уже упорядоченную левую часть — как разбирают карты в руке.</p>
<pre><code>[12, 11, 13, 5]
берём 11, оно меньше 12
[11, 12, 13, 5]</code></pre>
<p>На почти отсортированных данных даёт <b>O(n)</b> — лучший выбор для таких случаев и для коротких массивов.</p>

<h4>Слиянием (merge)</h4>
<p><b>Разделяй и властвуй:</b> делим массив пополам до одиночных элементов, затем сливаем отсортированные половины.</p>
<pre><code>[8,3,5,1] → [8,3] [5,1] → [8][3][5][1]
слияние:   [3,8]  [1,5]  →  [1,3,5,8]</code></pre>
<p>Уровней деления — <b>log₂n</b> (для n=8 это 3), на каждом O(n) на слияние → O(n log n) <i>всегда</i>.</p>

<h4>Быстрая (quick)</h4>
<p>Выбираем <b>опорный элемент (pivot)</b>: меньшие уходят влево, большие вправо, обе части сортируются рекурсивно.</p>
<div class="warn-box">Если pivot каждый раз оказывается крайним (например, первый элемент уже отсортированного массива), деление идёт на 0 и n−1 → <b>O(n²)</b>. Лечится случайным выбором pivot.</div>
<p>На практике применяют чаще merge sort: работает <b>на месте</b> и дружит с кешем процессора.</p>

<h4>Пирамидальная (heap)</h4>
<p>Строит <b>двоичную кучу</b> (родитель не меньше потомков), затем многократно извлекает максимум в конец массива. Гарантия O(n log n) без лишней памяти, но неустойчива.</p>

<h3>Важные определения</h3>
<ul>
<li><b>Устойчивая (стабильная)</b> — равные элементы сохраняют исходный взаимный порядок. Нужно при сортировке по нескольким полям подряд.</li>
<li><b>На месте (in-place)</b> — не требует существенной дополнительной памяти, O(1). Merge sort — <b>не</b> in-place.</li>
</ul>

<h3>Предел O(n log n)</h3>
<p>Любая сортировка <b>сравнением</b> не может быть быстрее <b>O(n log n)</b> — это доказанная нижняя граница.</p>
<p>Обойти её можно только без сравнений: <b>сортировка подсчётом</b> (counting sort) считает, сколько раз встречается каждое значение, и работает за O(n + k). Ограничение — только целые числа из небольшого диапазона.</p>

<h3>Поиск</h3>
<ul>
<li><b>Линейный</b> — O(n), работает на любых данных</li>
<li><b>Бинарный</b> — O(log n), но <b>только на отсортированном</b> массиве</li>
</ul>`,

'algorithms|Структуры данных': `
<h3>Линейные и нелинейные</h3>
<ul>
<li><b>Линейные:</b> массив, связный список, стек, очередь</li>
<li><b>Нелинейные:</b> дерево, граф</li>
</ul>

<h3>Стек и очередь</h3>
<table>
<tr><th></th><th>Стек</th><th>Очередь</th></tr>
<tr><td>Принцип</td><td><b>LIFO</b> (последним пришёл — первым вышел)</td><td><b>FIFO</b> (первым пришёл — первым вышел)</td></tr>
<tr><td>Операции</td><td>push, pop, peek/top</td><td>enqueue, dequeue</td></tr>
<tr><td>Пример</td><td>отмена действий (undo), вызовы функций</td><td>очередь печати, задачи</td></tr>
</table>
<p>В стеке доступен <b>только верхний</b> элемент. Извлечение из пустого стека — ошибка <i>underflow</i>.</p>

<h3>Массив и связный список</h3>
<table>
<tr><th>Операция</th><th>Массив</th><th>Связный список</th></tr>
<tr><td>Доступ по индексу</td><td><b>O(1)</b></td><td>O(n)</td></tr>
<tr><td>Вставка/удаление в середине</td><td>O(n)</td><td><b>O(1)</b>*</td></tr>
</table>
<p>* при наличии ссылки на нужный узел. Массив хранится подряд, поэтому адрес вычисляется сразу; список — набор узлов со ссылками.</p>

<h3>Деревья</h3>
<ul>
<li><b>Бинарное дерево</b> — не более 2 потомков у узла</li>
<li><b>Лист</b> — узел без потомков, <b>корень</b> — верхний узел</li>
<li>Обходы: <b>pre-order</b> (корень→лево→право), <b>in-order</b> (лево→корень→право), <b>post-order</b> (лево→право→корень)</li>
</ul>
<p><b>In-order</b> у дерева поиска даёт отсортированную последовательность.</p>

<h3>Хеш-таблица</h3>
<p>Хранит пары <b>ключ → значение</b>. Поиск, вставка, удаление в среднем за <b>O(1)</b> благодаря хеш-функции.</p>

<h3>Графы</h3>
<p>Вершины и рёбра. Представление: <b>матрица смежности</b> (таблица n×n) или <b>список смежности</b>. Алгоритм <b>Дейкстры</b> — кратчайшие пути (это не сортировка!).</p>`,

/* ===================== БАЗЫ ДАННЫХ ===================== */
'databases|SQL-запросы': `
<div class="warn-box"><b>Формат на КТА:</b> в этом блоке задания с выбором <b>одного или нескольких</b> правильных ответов (не более трёх). 20 заданий, до 40 баллов.</div>

<h3>Структура запроса</h3>
<pre><code>SELECT столбцы
FROM таблица
WHERE условие
GROUP BY столбец
HAVING условие_для_групп
ORDER BY столбец DESC
LIMIT 10;</code></pre>

<h3>Порядок выполнения (не совпадает с порядком написания!)</h3>
<p><b>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</b></p>
<p>Поэтому первым логически выполняется <b>FROM</b> — определяется источник данных.</p>

<h3>WHERE и HAVING</h3>
<ul>
<li><b>WHERE</b> фильтрует отдельные строки <i>до</i> группировки</li>
<li><b>HAVING</b> фильтрует уже сгруппированные данные <i>после</i> GROUP BY</li>
</ul>

<h3>Агрегатные функции</h3>
<p><b>COUNT, SUM, AVG, MIN, MAX</b> — работают над группой строк.</p>
<ul>
<li><b>COUNT(*)</b> считает все строки, <b>COUNT(столбец)</b> — <i>пропускает NULL</i></li>
<li>UPPER, LENGTH — <b>не</b> агрегатные (работают с одной строкой)</li>
</ul>

<h3>Операторы условий</h3>
<ul>
<li><b>BETWEEN a AND b</b> — диапазон включительно</li>
<li><b>IN (…)</b> — принадлежность списку, <b>NOT IN</b> — наоборот</li>
<li><b>LIKE</b> — шаблон: <code>%</code> любое число символов, <code>_</code> ровно один<br><code>LIKE 'A%'</code> — всё, что начинается на A</li>
<li><b>IS NULL / IS NOT NULL</b> — проверка на пустоту</li>
</ul>
<div class="warn-box"><b>Ловушка:</b> <code>WHERE field = NULL</code> <b>не работает</b> никогда. Только <code>IS NULL</code>.</div>

<h3>Соединения (JOIN)</h3>
<table>
<tr><th>JOIN</th><th>Что возвращает</th></tr>
<tr><td><b>INNER JOIN</b></td><td>только совпавшие строки в обеих таблицах</td></tr>
<tr><td><b>LEFT JOIN</b></td><td>все строки левой + совпадения справа (иначе NULL)</td></tr>
<tr><td><b>RIGHT JOIN</b></td><td>все строки правой + совпадения слева</td></tr>
<tr><td><b>FULL OUTER JOIN</b></td><td>все строки обеих таблиц</td></tr>
</table>
<p><b>UNION</b> объединяет результаты двух запросов и убирает дубликаты (<b>UNION ALL</b> — оставляет).</p>

<h3>Прочее</h3>
<p><b>DISTINCT</b> убирает дубликаты · <b>ORDER BY … DESC</b> сортировка по убыванию (ASC по умолчанию) · <b>LIMIT n</b> ограничивает число строк · <b>подзапрос</b> — SELECT внутри другого запроса.</p>`,

'databases|Команды и структура': `
<h3>Категории команд SQL</h3>
<table>
<tr><th>Категория</th><th>Команды</th><th>Назначение</th></tr>
<tr><td><b>DDL</b></td><td>CREATE, ALTER, DROP, TRUNCATE</td><td>структура (определение данных)</td></tr>
<tr><td><b>DML</b></td><td>SELECT, INSERT, UPDATE, DELETE</td><td>сами данные (манипуляция)</td></tr>
<tr><td><b>DCL</b></td><td>GRANT, REVOKE</td><td>права доступа</td></tr>
<tr><td><b>TCL</b></td><td>COMMIT, ROLLBACK</td><td>транзакции</td></tr>
</table>
<div class="warn-box">Это <b>самый частый вопрос</b> блока. Запомни: GROUP, HAVING, ORDER — <i>не</i> самостоятельные операторы, а части SELECT, поэтому в списки DML их включать нельзя.</div>

<h3>DELETE, TRUNCATE, DROP</h3>
<ul>
<li><b>DELETE</b> — удаляет строки (можно с WHERE), структура остаётся</li>
<li><b>TRUNCATE</b> — быстро очищает <i>все</i> строки, структура остаётся</li>
<li><b>DROP TABLE</b> — удаляет таблицу <i>целиком</i> вместе со структурой</li>
</ul>

<h3>Ключи</h3>
<ul>
<li><b>PRIMARY KEY</b> — однозначно определяет строку. Уникален, <b>не может быть NULL</b></li>
<li><b>FOREIGN KEY</b> — ссылается на первичный ключ другой таблицы (связь)</li>
<li><b>Составной (композитный)</b> ключ — из нескольких столбцов</li>
<li><b>Кандидатный</b> ключ — тот, что мог бы стать первичным</li>
</ul>

<h3>Ограничения (constraints)</h3>
<ul>
<li><b>NOT NULL</b> — запрещает пустые значения</li>
<li><b>UNIQUE</b> — запрещает повторы, но <b>допускает NULL</b> (в отличие от PRIMARY KEY)</li>
<li><b>CHECK</b> — проверка условия · <b>DEFAULT</b> — значение по умолчанию</li>
</ul>

<h3>Индексы</h3>
<p>Ускоряют поиск и сортировку (как оглавление в книге).<br>
<b>Минус:</b> замедляют INSERT/UPDATE/DELETE и занимают место.</p>

<h3>Объекты БД</h3>
<ul>
<li><b>VIEW (представление)</b> — виртуальная таблица на основе SELECT, своих данных не хранит</li>
<li><b>Хранимая процедура</b> — сохранённый набор SQL-команд, вызывается по имени</li>
<li><b>Триггер</b> — код, срабатывающий <i>автоматически</i> при INSERT/UPDATE/DELETE</li>
</ul>`,

'databases|Теория БД': `
<h3>Реляционная модель</h3>
<p>Данные хранятся в <b>таблицах (отношениях)</b>, связанных по ключам. Реляционные СУБД: MySQL, PostgreSQL, Oracle, MS SQL Server.</p>
<ul>
<li><b>Строка</b> = кортеж = запись</li>
<li><b>Столбец</b> = атрибут = поле</li>
</ul>
<p>NoSQL: <b>MongoDB</b> — документная (JSON-подобные документы, не таблицы).</p>

<h3>Свойства таблицы — частый вопрос</h3>
<ul>
<li>Каждая ячейка содержит <b>один</b> (атомарный) элемент данных</li>
<li>Все значения одного столбца <b>однородны</b> по типу</li>
<li>Имена столбцов <b>уникальны</b></li>
<li>Полностью одинаковых строк <b>быть не должно</b></li>
<li><b>Порядок строк и столбцов произволен</b> — не несёт смысла</li>
</ul>

<h3>Нормализация</h3>
<p>Цель — убрать <b>избыточность</b> (дублирование) и <b>аномалии</b> вставки, обновления, удаления.</p>
<ul>
<li><b>1НФ</b> — все значения атомарны (неделимы), нет повторяющихся групп</li>
<li><b>2НФ</b> — 1НФ + нет частичной зависимости от <i>части</i> составного ключа</li>
<li><b>3НФ</b> — 2НФ + нет транзитивных зависимостей (неключевой не зависит от неключевого)</li>
</ul>

<h3>Транзакции — ACID</h3>
<table>
<tr><td><b>A</b>tomicity</td><td>атомарность — всё или ничего</td></tr>
<tr><td><b>C</b>onsistency</td><td>согласованность — БД остаётся корректной</td></tr>
<tr><td><b>I</b>solation</td><td>изолированность — транзакции не мешают друг другу</td></tr>
<tr><td><b>D</b>urability</td><td>долговечность — после COMMIT данные не потеряются даже при сбое</td></tr>
</table>
<p><b>COMMIT</b> фиксирует изменения, <b>ROLLBACK</b> откатывает.</p>

<h3>Виды связей</h3>
<ul>
<li><b>1:1</b> — один студент — один паспорт</li>
<li><b>1:M</b> — одна группа — много студентов (самая частая)</li>
<li><b>M:M</b> — много студентов — много курсов (реализуется через промежуточную таблицу)</li>
</ul>`

};
