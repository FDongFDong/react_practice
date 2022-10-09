import React, { useRef, useState } from 'react';

// import dayjs from 'dayjs';
// import 'dayjs/locale/ko';
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';
import { format as timeZoneFormat, toDate } from 'date-fns-tz';
import { ko } from 'date-fns/locale';
import { add, format, sub, differenceInHours } from 'date-fns';
import addWeeks from 'date-fns/addWeeks';
// dayjs.locale('ko');
// dayjs.extend(utc);
// dayjs.extend(timezone);
const MomentExample = () => {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState('');
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), 'EEEE', { locale: ko }));
  };

  const dateFnsDate = new Date();
  // momentData에 1주일 추가
  const newDateFnsData = add(dateFnsDate, { days: 1 });
  // newMomentData에 1주일 추가
  const newDateFnsData2 = addWeeks(newDateFnsData, 1);

  return (
    <div>
      <h1>data-fns</h1>
      <div>Imutable Check</div>
      <div>
        {format(dateFnsDate, 'yyyy-MM-dd')}
        <br />
        {format(newDateFnsData, 'yyyy-MM-dd')}
        <br />
        {format(newDateFnsData2, 'yyyy-MM-dd')}
      </div>
      <br />

      <div>Summer Time (New-york)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {timeZoneFormat(
          add(
            toDate(new Date('2018-03-10 13:00:00'), {
              timeZone: 'America/New_York',
            }),
            { days: 1 }
          ),
          'yyyy-MM-dd HH:mm:ssXXX',
          {
            timeZone: 'America/New_York',
          }
        )}
      </div>
      {/* summer time 때문에 1시간이 줄어든다.   */}
      <div>
        2018년 3월 10일 13시에 24 더하기:
        {timeZoneFormat(
          add(
            toDate(new Date('2018-03-10 13:00:00'), {
              timeZone: 'America/New_York',
            }),
            { hours: 24 }
          ),
          'yyyy-MM-dd HH:mm:ssXXX',
          {
            timeZone: 'America/New_York',
          }
        )}
      </div>

      <br />
      {/* 윤년 */}
      <div>Leap year (korea)</div>
      <div>
        2017년 1월 1일에서 1년 빼기:
        {format(sub(new Date('2017-01-01'), { years: 1 }), 'yyyy-mm-dd')}
      </div>
      {/* 2월이 29일까지 있었기 때문에 윤년도 잘 표기된다.*/}
      <div>
        2017년 1월 1일에서 365일 빼기:
        {format(sub(new Date('2017-01-01'), { days: 365 }), 'yyyy-mm-dd')}
      </div>
      <br />
      <div>한국어로 표기하기 (07-17-2021을 2021년 7월 17일로 표기하기</div>
      <div>{format(new Date('07-17-2021'), 'yyyy년 M월 dd일')}</div>
      <br />
      <div>날짜 요일 찾기</div>
      <div>
        <input
          type="date"
          ref={birthDayRef}
          onChange={handleBirthDayChange}
        ></input>
        무슨 요일이었을까?
        <br />
        {day}
      </div>
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이일까?</div>
      <div>
        {differenceInHours(
          new Date('2021-07-17 03:00'),
          new Date('2021-07-18 02:00')
        )}
        시간
      </div>
    </div>
  );
};

export default MomentExample;
