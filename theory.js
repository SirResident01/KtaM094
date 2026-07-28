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
<h3>Полная таблица 12 времён + be going to</h3>
<table>
<tr><th>Время</th><th>Формула</th><th>Когда</th><th>Пример</th></tr>
<tr><td>Present Simple</td><td>V1 / V+s</td><td>привычки, факты, расписание</td><td><i>I work every day.</i></td></tr>
<tr><td>Present Continuous</td><td>am/is/are + V-ing</td><td>сейчас, временная ситуация</td><td><i>She is reading now.</i></td></tr>
<tr><td>Present Perfect</td><td>have/has + V3</td><td>результат важен сейчас; ever/never/just/already/yet</td><td><i>I have finished my work.</i></td></tr>
<tr><td>Present Perfect Cont.</td><td>have/has been + V-ing</td><td>действие длилось и ещё идёт (for/since)</td><td><i>I have been studying for 2 hours.</i></td></tr>
<tr><td>Past Simple</td><td>V2</td><td>законченное прошлое с точным временем</td><td><i>I visited Almaty yesterday.</i></td></tr>
<tr><td>Past Continuous</td><td>was/were + V-ing</td><td>процесс в прошлом; фон для другого действия</td><td><i>I was reading when he called.</i></td></tr>
<tr><td>Past Perfect</td><td>had + V3</td><td>«раньше другого прошлого»</td><td><i>She had left before I arrived.</i></td></tr>
<tr><td>Past Perfect Cont.</td><td>had been + V-ing</td><td>длилось до момента в прошлом</td><td><i>I had been waiting for an hour.</i></td></tr>
<tr><td>Future Simple</td><td>will + V1</td><td>решение сейчас, прогноз, мнение</td><td><i>I will help you.</i></td></tr>
<tr><td>Future Continuous</td><td>will be + V-ing</td><td>процесс в будущем в определённый момент</td><td><i>I will be working at 5.</i></td></tr>
<tr><td>Future Perfect</td><td>will have + V3</td><td>завершится к моменту в будущем</td><td><i>I will have finished by 6.</i></td></tr>
<tr><td>Future Perfect Cont.</td><td>will have been + V-ing</td><td>длится до момента в будущем</td><td><i>I will have been working for 3 hours.</i></td></tr>
<tr><td>be going to</td><td>am/is/are going to + V1</td><td>план / видимые признаки</td><td><i>It is going to rain.</i></td></tr>
</table>
<div class="warn-box"><b>Самые частые ловушки:</b><br>
• Past Simple (есть yesterday/ago/last…) ≠ Present Perfect (нет точного времени, важен результат сейчас).<br>
• since = точка отсчёта (since 2020), for = отрезок (for 3 years).<br>
• will = решение сейчас / мнение; going to = уже есть план или признаки.</div>`,

'english|Passive Voice': `
<h3>Пассивный залог = be + V3</h3>
<p>Время показывает глагол <b>be</b>. Действующее лицо — через <b>by</b> (необязательно).</p>
<table>
<tr><th>Время</th><th>Формула</th><th>Пример</th></tr>
<tr><td>Present Simple</td><td>am/is/are + V3</td><td><i>Houses are built.</i></td></tr>
<tr><td>Past Simple</td><td>was/were + V3</td><td><i>The letter was written.</i></td></tr>
<tr><td>Future Simple</td><td>will be + V3</td><td><i>The work will be done.</i></td></tr>
<tr><td>Present Perfect</td><td>have/has been + V3</td><td><i>The book has been read.</i></td></tr>
<tr><td>Past Perfect</td><td>had been + V3</td><td><i>The house had been sold.</i></td></tr>
<tr><td>Modals</td><td>can/must/should + be + V3</td><td><i>It can be done.</i></td></tr>
</table>
<h3>Active → Passive</h3>
<p><i>They build houses.</i> → <i>Houses <b>are built</b>.</i><br>
<i>Someone stole my bike.</i> → <i>My bike <b>was stolen</b>.</i><br>
<i>She will finish the report.</i> → <i>The report <b>will be finished</b>.</i></p>
<div class="warn-box">Не путай: <i>is built</i> (Present) / <i>was built</i> (Past) / <i>has been built</i> (Present Perfect). Частая ошибка — забыть been в Perfect.</div>`,

'english|Reported Speech': `
<h3>Прямая → косвенная речь: сдвиг времён</h3>
<table>
<tr><th>Прямая</th><th>Косвенная</th></tr>
<tr><td>Present Simple</td><td>Past Simple</td></tr>
<tr><td>Present Continuous</td><td>Past Continuous</td></tr>
<tr><td>Present Perfect</td><td>Past Perfect</td></tr>
<tr><td>Past Simple</td><td>Past Perfect</td></tr>
<tr><td>will</td><td>would</td></tr>
<tr><td>can</td><td>could</td></tr>
<tr><td>may</td><td>might</td></tr>
<tr><td>must / have to</td><td>had to</td></tr>
</table>
<h3>Указатели времени и места</h3>
<table>
<tr><th>Прямая</th><th>Косвенная</th></tr>
<tr><td>today</td><td>that day</td></tr>
<tr><td>tomorrow</td><td>the next day / the following day</td></tr>
<tr><td>yesterday</td><td>the day before</td></tr>
<tr><td>now</td><td>then</td></tr>
<tr><td>here</td><td>there</td></tr>
<tr><td>this / these</td><td>that / those</td></tr>
<tr><td>ago</td><td>before</td></tr>
</table>
<p><i>“I am busy,” he said.</i> → <i>He said that he <b>was</b> busy.</i><br>
<i>“I will come tomorrow,” she said.</i> → <i>She said she <b>would</b> come <b>the next day</b>.</i></p>
<div class="warn-box">После say/tell/ask обычно that (можно опустить). tell + кому: <i>He told <b>me</b> that…</i> (не He told that…).</div>`,

'english|Conditionals': `
<h3>Условные предложения — 4 типа</h3>
<table>
<tr><th>Тип</th><th>If-часть</th><th>Главная</th><th>Смысл</th><th>Пример</th></tr>
<tr><td>Zero</td><td>Present Simple</td><td>Present Simple</td><td>всегда правда, законы</td><td><i>If you heat ice, it melts.</i></td></tr>
<tr><td>First</td><td>Present Simple</td><td>will + V1</td><td>реальное будущее</td><td><i>If it rains, I will stay home.</i></td></tr>
<tr><td>Second</td><td>Past Simple</td><td>would + V1</td><td>нереальное сейчас</td><td><i>If I were rich, I would travel.</i></td></tr>
<tr><td>Third</td><td>Past Perfect</td><td>would have + V3</td><td>нереальное прошлое</td><td><i>If I had studied, I would have passed.</i></td></tr>
</table>
<div class="warn-box"><b>Две железные правила:</b><br>
1) После <b>if</b> никогда не ставь will: <i>If it <b>rains</b>…</i> (не If it will rain).<br>
2) Во 2-м типе для всех лиц — <b>were</b>: <i>If I <b>were</b> you…</i></div>`,

'english|Modal Verbs': `
<h3>Модальные глаголы</h3>
<table>
<tr><th>Модал</th><th>Значение</th><th>Пример</th></tr>
<tr><td>can</td><td>умение, возможность</td><td><i>I can swim.</i></td></tr>
<tr><td>could</td><td>умение в прошлом / вежливая просьба</td><td><i>I could swim when I was 5.</i></td></tr>
<tr><td>may</td><td>разрешение / вероятность</td><td><i>May I come in?</i></td></tr>
<tr><td>might</td><td>меньшая вероятность</td><td><i>It might rain.</i></td></tr>
<tr><td>must</td><td>обязанность / уверенное предположение</td><td><i>You must be tired.</i></td></tr>
<tr><td>have to</td><td>вынужденная обязанность (внешняя)</td><td><i>I have to work tomorrow.</i></td></tr>
<tr><td>should / ought to</td><td>совет</td><td><i>You should study more.</i></td></tr>
<tr><td>need</td><td>необходимость</td><td><i>You need to rest.</i></td></tr>
<tr><td>will</td><td>будущее / обещание</td><td><i>I will help you.</i></td></tr>
<tr><td>would</td><td>вежливость / гипотеза</td><td><i>Would you like some tea?</i></td></tr>
</table>
<div class="warn-box"><b>mustn't</b> = запрет («нельзя»). <b>don't have to</b> = «не обязан» (можно не делать). Это разные вещи!</div>`,

'english|Gerund & Infinitive': `
<h3>Герундий (V-ing) или инфинитив (to + V1)</h3>
<h4>После этих глаголов — Gerund (V-ing)</h4>
<p>enjoy, like, love, hate, mind, finish, stop, suggest, avoid, keep, practise, consider, admit, deny</p>
<p><i>I enjoy <b>reading</b> books.</i> · <i>She finished <b>writing</b>.</i></p>
<h4>После этих — Infinitive (to + V1)</h4>
<p>want, decide, hope, promise, need, plan, learn, offer, agree, refuse, expect, afford, manage</p>
<p><i>She wants <b>to travel</b>.</i> · <i>I decided <b>to stay</b>.</i></p>
<h4>Оба возможны (смысл может меняться)</h4>
<p>start, begin, continue, prefer, like, love, hate, remember, forget, stop, try</p>
<ul>
<li><i>stop smoking</i> = бросить курить · <i>stop to smoke</i> = остановиться, чтобы покурить</li>
<li><i>remember doing</i> = помню, что делал · <i>remember to do</i> = не забудь сделать</li>
</ul>
<div class="warn-box">После <b>любого предлога</b> — только -ing: good <b>at</b> playing, interested <b>in</b> learning, look forward <b>to</b> seeing.</div>`,

'english|Irregular Verbs': `
<h3>Частые неправильные глаголы (V1 → V2 → V3)</h3>
<table>
<tr><th>V1</th><th>V2</th><th>V3</th><th>Перевод</th></tr>
<tr><td>be</td><td>was/were</td><td>been</td><td>быть</td></tr>
<tr><td>become</td><td>became</td><td>become</td><td>становиться</td></tr>
<tr><td>begin</td><td>began</td><td>begun</td><td>начинать</td></tr>
<tr><td>break</td><td>broke</td><td>broken</td><td>ломать</td></tr>
<tr><td>bring</td><td>brought</td><td>brought</td><td>приносить</td></tr>
<tr><td>buy</td><td>bought</td><td>bought</td><td>покупать</td></tr>
<tr><td>catch</td><td>caught</td><td>caught</td><td>ловить</td></tr>
<tr><td>choose</td><td>chose</td><td>chosen</td><td>выбирать</td></tr>
<tr><td>come</td><td>came</td><td>come</td><td>приходить</td></tr>
<tr><td>do</td><td>did</td><td>done</td><td>делать</td></tr>
<tr><td>drink</td><td>drank</td><td>drunk</td><td>пить</td></tr>
<tr><td>drive</td><td>drove</td><td>driven</td><td>водить</td></tr>
<tr><td>eat</td><td>ate</td><td>eaten</td><td>есть</td></tr>
<tr><td>find</td><td>found</td><td>found</td><td>находить</td></tr>
<tr><td>get</td><td>got</td><td>got/gotten</td><td>получать</td></tr>
<tr><td>give</td><td>gave</td><td>given</td><td>давать</td></tr>
<tr><td>go</td><td>went</td><td>gone</td><td>идти</td></tr>
<tr><td>have</td><td>had</td><td>had</td><td>иметь</td></tr>
<tr><td>know</td><td>knew</td><td>known</td><td>знать</td></tr>
<tr><td>leave</td><td>left</td><td>left</td><td>уходить / оставлять</td></tr>
<tr><td>make</td><td>made</td><td>made</td><td>делать / создавать</td></tr>
<tr><td>read</td><td>read</td><td>read</td><td>читать</td></tr>
<tr><td>see</td><td>saw</td><td>seen</td><td>видеть</td></tr>
<tr><td>speak</td><td>spoke</td><td>spoken</td><td>говорить</td></tr>
<tr><td>take</td><td>took</td><td>taken</td><td>брать</td></tr>
<tr><td>tell</td><td>told</td><td>told</td><td>рассказывать</td></tr>
<tr><td>think</td><td>thought</td><td>thought</td><td>думать</td></tr>
<tr><td>write</td><td>wrote</td><td>written</td><td>писать</td></tr>
</table>
<div class="warn-box">V2 = Past Simple. V3 = для Present/Past Perfect и Passive. Не путай: <i>I went</i> (Past) vs <i>I have gone</i> (Perfect).</div>`,

'english|Articles': `
<h3>Артикли: a/an · the · нулевой (−)</h3>
<table>
<tr><th>Артикль</th><th>Когда</th><th>Примеры</th></tr>
<tr><td><b>a / an</b></td><td>впервые упоминаем; один из многих; профессии</td><td><i>a book, an apple, a teacher</i></td></tr>
<tr><td><b>the</b></td><td>уже известно; единственное в своём роде; суперлатив</td><td><i>the sun, the best student, the book I bought</i></td></tr>
<tr><td><b>− (нет)</b></td><td>имена, языки, страны (обычно), еда вообще, спорт</td><td><i>Anna, English, Kazakhstan, milk, football</i></td></tr>
</table>
<ul>
<li><b>a</b> перед согласным <i>звуком</i>, <b>an</b> — перед гласным: <i>an hour, an honest man</i> (h немое), но <i>a university</i> (звук [ju]).</li>
<li>the + реки/моря/горы-цепи/уникальные объекты: <i>the Thames, the Alps, the Moon</i>.</li>
<li>Без артикля: города, большинство стран, улицы: <i>Astana, France, Abay Street</i>. Но: <i>the USA, the UK, the Netherlands</i>.</li>
</ul>
<div class="warn-box">Смотри на <b>звук</b>, не на букву: <i>an MBA</i> (эм), <i>a European</i> ([ju]).</div>`,

'english|Prepositions': `
<h3>Предлоги времени и места</h3>
<table>
<tr><th>Предлог</th><th>Использование</th><th>Примеры</th></tr>
<tr><td><b>in</b></td><td>месяц, год, сезон, город, страна; внутри</td><td><i>in July, in 2020, in Almaty, in the room</i></td></tr>
<tr><td><b>on</b></td><td>день, дата; на поверхности</td><td><i>on Monday, on 5 May, on the table</i></td></tr>
<tr><td><b>at</b></td><td>точное время, точка</td><td><i>at 5 o'clock, at the bus stop, at home</i></td></tr>
<tr><td>between</td><td>между двумя</td><td><i>between A and B</i></td></tr>
<tr><td>among</td><td>среди многих</td><td><i>among friends</i></td></tr>
<tr><td>into / onto</td><td>движение внутрь / на</td><td><i>go into the room, jump onto the bed</i></td></tr>
<tr><td>through</td><td>сквозь</td><td><i>through the forest</i></td></tr>
<tr><td>across</td><td>через (с одной стороны на другую)</td><td><i>across the street</i></td></tr>
<tr><td>for</td><td>отрезок времени</td><td><i>for 3 years</i></td></tr>
<tr><td>since</td><td>с момента</td><td><i>since 2019</i></td></tr>
<tr><td>during</td><td>в течение (событие/период)</td><td><i>during the lesson</i></td></tr>
<tr><td>by</td><td>к сроку / способ</td><td><i>by Friday, by bus</i></td></tr>
<tr><td>from … to</td><td>от … до</td><td><i>from 9 to 5</i></td></tr>
</table>
<h3>Устойчивые сочетания</h3>
<p>interested <b>in</b> · afraid <b>of</b> · good <b>at</b> · depend <b>on</b> · listen <b>to</b> · look <b>for</b> · wait <b>for</b></p>
<div class="warn-box">Памятка времени: <b>at</b> (час) · <b>on</b> (день) · <b>in</b> (месяц/год). at night, но in the morning/afternoon/evening.</div>`,

'english|Comparative & Superlative': `
<h3>Степени сравнения прилагательных</h3>
<table>
<tr><th>Тип</th><th>Positive</th><th>Comparative</th><th>Superlative</th></tr>
<tr><td>1 слог</td><td>tall</td><td>taller</td><td>the tallest</td></tr>
<tr><td>на -y</td><td>happy</td><td>happier</td><td>the happiest</td></tr>
<tr><td>2+ слога</td><td>beautiful</td><td>more beautiful</td><td>the most beautiful</td></tr>
<tr><td>исключение</td><td>good</td><td>better</td><td>the best</td></tr>
<tr><td>исключение</td><td>bad</td><td>worse</td><td>the worst</td></tr>
<tr><td>исключение</td><td>far</td><td>farther/further</td><td>the farthest/furthest</td></tr>
<tr><td>исключение</td><td>little</td><td>less</td><td>the least</td></tr>
<tr><td>исключение</td><td>many/much</td><td>more</td><td>the most</td></tr>
</table>
<ul>
<li>Сравнение: <i>A is <b>taller than</b> B.</i></li>
<li>Суперлатив: <i>This is <b>the tallest</b> building.</i></li>
<li>Конструкция: <i><b>The more</b> you practise, <b>the better</b> you become.</i></li>
<li>Равенство: <i>as … as</i> → <i>as tall as</i>; неравенство: <i>not as … as</i>.</li>
</ul>
<div class="warn-box">Не смешивай: <i>more taller</i> — ошибка. Либо -er, либо more — не вместе.</div>`,

'english|Phrasal Verbs': `
<h3>Частые фразовые глаголы на КТА</h3>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td>look after</td><td>заботиться</td><td><i>She looks after her sister.</i></td></tr>
<tr><td>look for</td><td>искать</td><td><i>I'm looking for my keys.</i></td></tr>
<tr><td>look up</td><td>искать в словаре</td><td><i>Look up this word.</i></td></tr>
<tr><td>look forward to</td><td>ждать с нетерпением</td><td><i>I look forward to meeting you.</i></td></tr>
<tr><td>give up</td><td>бросать, сдаваться</td><td><i>Don't give up!</i></td></tr>
<tr><td>turn on / off</td><td>включить / выключить</td><td><i>Turn off the lights.</i></td></tr>
<tr><td>put on</td><td>надеть</td><td><i>Put on your coat.</i></td></tr>
<tr><td>take off</td><td>снять / взлететь</td><td><i>Take off your shoes.</i></td></tr>
<tr><td>wake up</td><td>просыпаться</td><td><i>I wake up at 7.</i></td></tr>
<tr><td>find out</td><td>выяснить</td><td><i>I found out the truth.</i></td></tr>
<tr><td>go on</td><td>продолжать</td><td><i>Please go on.</i></td></tr>
<tr><td>put off</td><td>отложить</td><td><i>They put off the meeting.</i></td></tr>
<tr><td>turn down</td><td>отклонить / убавить</td><td><i>She turned down the offer.</i></td></tr>
<tr><td>turn up</td><td>появиться / прибавить</td><td><i>He turned up late.</i></td></tr>
</table>
<div class="warn-box">look after ≠ look for ≠ look up — разные значения. После look forward <b>to</b> всегда -ing: <i>looking forward to <b>seeing</b></i>.</div>`,

'english|Relative Clauses': `
<h3>Относительные местоимения</h3>
<table>
<tr><th>Слово</th><th>К чему</th><th>Пример</th></tr>
<tr><td><b>who</b></td><td>люди</td><td><i>The man who called is my teacher.</i></td></tr>
<tr><td><b>which</b></td><td>вещи / животные</td><td><i>The book which I bought is new.</i></td></tr>
<tr><td><b>that</b></td><td>люди или вещи</td><td><i>The car that I drive is old.</i></td></tr>
<tr><td><b>whose</b></td><td>чей / чья</td><td><i>The girl whose bag is red…</i></td></tr>
<tr><td><b>where</b></td><td>место</td><td><i>The city where I live…</i></td></tr>
<tr><td><b>when</b></td><td>время</td><td><i>The day when we met…</i></td></tr>
<tr><td><b>why</b></td><td>причина</td><td><i>The reason why I left…</i></td></tr>
</table>
<ul>
<li>Defining (нужно для смысла): запятых нет. <i>Students who study hard pass.</i></li>
<li>Non-defining (доп. информация): запятые есть, <b>that</b> нельзя. <i>Astana, which is the capital, is modern.</i></li>
</ul>
<div class="warn-box">who = люди, which = вещи. that можно почти везде в defining-clauses, но не после запятой.</div>`,

'english|Subject-Verb Agreement': `
<h3>Согласование подлежащего и сказуемого</h3>
<table>
<tr><th>Правило</th><th>Пример</th></tr>
<tr><td>He / She / It → V+s (Present Simple)</td><td><i>He works. She studies.</i></td></tr>
<tr><td>I / You / We / They → V1</td><td><i>They work. I study.</i></td></tr>
<tr><td>Everybody / someone / nobody → единств. число</td><td><i>Everybody <b>knows</b> the answer.</i></td></tr>
<tr><td>There is + ед.ч. / There are + мн.ч.</td><td><i>There is a book. There are books.</i></td></tr>
<tr><td>The news / mathematics / physics → ед.ч.</td><td><i>The news <b>is</b> good.</i></td></tr>
<tr><td>People / police → мн.ч.</td><td><i>People <b>are</b> happy.</i></td></tr>
<tr><td>A number of + мн.ч. / The number of + ед.ч.</td><td><i>A number of students <b>are</b>… / The number <b>is</b>…</i></td></tr>
<tr><td>Neither… nor / Either… or — глагол ближе к последнему</td><td><i>Neither he nor they <b>are</b> ready.</i></td></tr>
</table>
<div class="warn-box">Не: <i>He work</i> / <i>They works</i>. Смотри на подлежащее, не на слова между ним и глаголом: <i>The list of items <b>is</b> long.</i></div>`,

'english|Vocabulary': `
<h3>Синонимы</h3>
<table>
<tr><th>Слово</th><th>Синоним</th></tr>
<tr><td>important</td><td>essential, significant</td></tr>
<tr><td>big / huge</td><td>enormous, vast</td></tr>
<tr><td>get</td><td>obtain, receive</td></tr>
<tr><td>buy</td><td>purchase</td></tr>
<tr><td>help</td><td>assist, aid</td></tr>
<tr><td>improve</td><td>enhance, develop</td></tr>
<tr><td>start</td><td>begin, commence</td></tr>
<tr><td>show</td><td>demonstrate, indicate</td></tr>
</table>
<h3>Антонимы</h3>
<p>good ↔ bad · increase ↔ decrease · expensive ↔ cheap · accept ↔ refuse · arrive ↔ depart · success ↔ failure · modern ↔ traditional</p>
<h3>Частые глаголы</h3>
<p>develop, improve, provide, include, require, achieve, consider, create, support, reduce</p>
<h3>Academic words</h3>
<p>analyze · concept · data · factor · method · research · significant · theory · evidence · process · structure · function</p>
<h3>make или do</h3>
<ul>
<li><b>make</b>: a mistake, a decision, a noise, money, progress, an effort</li>
<li><b>do</b>: homework, a favour, business, the washing, research</li>
</ul>
<div class="warn-box">На КТА часто просят синоним/антоним академического слова. Учи пары, а не одиночные слова.</div>`,

'english|Чтение (Reading)': `
<h3>Как работать с текстом на экзамене</h3>
<ol>
<li><b>Сначала прочитай вопросы</b>, потом текст — будешь знать, что искать.</li>
<li><b>Skimming</b> — быстрый просмотр ради общей идеи (для вопросов «What is the text about?»).</li>
<li><b>Scanning</b> — поиск конкретной детали: цифры, имени, даты. Не читай всё подряд.</li>
<li>Ответ <b>всегда есть в тексте</b>. Не опирайся на собственные знания о мире.</li>
</ol>
<h3>Типы вопросов</h3>
<ul>
<li><b>Main idea</b> — о чём весь текст. Ответ обычно перефразирует первый/последний абзац.</li>
<li><b>Detail</b> — конкретный факт. Найди в тексте нужное место и сравни.</li>
<li><b>Vocabulary in context</b> — что значит слово <i>здесь</i>.</li>
<li><b>Inference</b> — вывод, прямо не сказанный, но следующий из текста.</li>
<li><b>NOT / EXCEPT</b> — ищи вариант, которого в тексте <b>нет</b>.</li>
</ul>
<div class="warn-box"><b>Ловушки:</b> вариант со словами прямо из текста часто неверный. Слова <i>always, never, all, only</i> в вариантах — обычно признак неверного ответа.</div>
<p><b>Связки:</b> however, although · because, therefore · moreover, furthermore</p>`,

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
