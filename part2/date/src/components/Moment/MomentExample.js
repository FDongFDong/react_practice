import React, { useRef, useState } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ko';

const MomentExample = () => {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState('');
  const handleBirthDayChange = (event) => {
    setDay(moment(event.target.value, 'YYYY-MM-DD').format('dddd'));
  };

  const momentDate = moment();
  // momentData에 1주일 추가
  const newMomentData = momentDate.add(1, 'week');
  // newMomentData에 1주일 추가
  const cloneNewMomentData = newMomentData.clone().add(1, 'week');

  return (
    <div>
      <h1>Moment.js</h1>
      <div>Imutable Check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentData.format()}
        <br />
        {cloneNewMomentData.format()}
      </div>
      <br />

      <div>Summer Time (New-york)</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {moment
          .tz('2018-03-10 13:00:00', 'America/New_York')
          .add(1, 'day')
          .format()}
      </div>
      {/* summer time 때문에 1시간이 줄어든다.   */}
      <div>
        2018년 3월 10일 13시에 24 더하기:
        {moment
          .tz('2018-03-10 13:00:00', 'America/New_York')
          .add(24, 'hour')
          .format()}
      </div>

      <br />
      {/* 윤년 */}
      <div>Leap year (korea)</div>
      <div>
        2017년 1월 1일에서 1년 빼기:
        {moment('2017-01-01 13:00:00').subtract(1, 'year').format()}
      </div>
      {/* 2월이 29일까지 있었기 때문에 윤년도 잘 표기된다.*/}
      <div>
        2017년 1월 1일에서 365일 빼기:
        {moment('2017-01-01 13:00:00').subtract(365, 'day').format()}
      </div>
      <br />
      <div>한국어로 표기하기 (07-17-2021을 2021년 7월 17일로 표기하기</div>
      <div>{moment('07-17-2021').format('YYYY년 M월 D일')}</div>
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
        {moment('2021-07-17 03:00').diff(moment('2021-07-18 02:00'), 'hours')}
        시간
      </div>
    </div>
  );
};

export default MomentExample;
