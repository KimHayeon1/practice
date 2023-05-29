// 프로그래밍 언어 선택 버튼
let language = 'python';
const javascriptBtn = document.querySelector('#javascript');
const pythonBtn = document.querySelector('#python');

// 차트별 필터
let problemTypeChartLv = 'lv0';
// 필터에 addEventListener를 주고, 선택한 레벨이 바뀔 시, problemTypeData 변경 후 차트 업데이트

const url =
  'https://raw.githubusercontent.com/Algorithm-Coding-Test-Data-Analysis/algoview/main/data.json';

DrawCharts(url);

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function DrawCharts(url) {
  const data = await getData(url);

  const methodCountLvChart = drawmethodCountLvChart(data);
  const lineCountLvChart = DrawLineCountLvChart(data);
  const companyCountChart = DrawCompanyCountChart(data);
  const problemTypeChart = DrawProblemTypeChart(data);

  const allCharts = {methodCountLvChart, lineCountLvChart, companyCountChart, problemTypeChart}
  // 프로그래밍 언어 버튼 클릭 시, 업데이트
  javascriptBtn.addEventListener('click', () => {
    resetChartsFilter()
    handleLanguageBtn(data, allCharts);
  });
}

// 레벨 별 메서드 카운트 차트
function drawmethodCountLvChart(data) {
  const methodCountLvData = Object.values(data[language]['countmethod']);

  return new Chart(
    document.querySelector('#method-count-chart'),
    {
      type: 'bar',
      data: {
        labels: ["LV0", "LV1", "LV2", "LV3", "LV4", "LV5"],
        datasets: [
          {
            label: '레벨 별 메서드 카운트 차트',
            data: methodCountLvData,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        chart: {
          chart: {
            display: false
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    }
  );
}

// 레벨 별 라인 수 차트
function DrawLineCountLvChart(data) {
  const {lineCountLvData, lineCountLvLabels} =  getlineCountLvDatas(data);

  return new Chart(
    document.querySelector('#line-count-chart'),
    {
      type: 'bar',
      data: {
        labels: lineCountLvLabels,
        datasets: [
          {
            label: '레벨 별 라인 수 차트',
            data: lineCountLvData,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    }
  );
}


// 출제 업체 수 차트
function DrawCompanyCountChart(data) {
  const {companyCountData, companyCountLabels} = getcompanyCountDatas(data);

  return new Chart(
    document.querySelector('#company-count-chart'),
    {
      type: 'pie',
      data: {
        labels: companyCountLabels,
        datasets: [
          {
            label: '출제 업체 수 차트',
            data: companyCountData,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
    }
  );
}

// 전체 문제 유형 차트
function DrawProblemTypeChart(data) {
  const {problemTypeData, problemTypeDataLabels} = getproblemTypeDatas(data);

  return new Chart(
    document.querySelector('#problem-type-chart'),
    {
      type: 'bar',
      data: {
        labels: problemTypeDataLabels,
        datasets: [
          {
            label: '전체 문제 유형 차트',
            data: problemTypeData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    }
  );
}

function resetChartsFilter() {
  problemTypeChartLv = 'lv0';
}

function handleLanguageBtn(data, allCharts) {
  language = 'javascript';
  
  const methodCountLvData = getMethodCountLvDatas(data);
  const {lineCountLvData, lineCountLvLabels} =  getlineCountLvDatas(data);
  const {companyCountData, companyCountLabels} = getcompanyCountDatas(data);
  const {problemTypeData, problemTypeDataLabels} = getproblemTypeDatas(data);

  addData(allCharts.methodCountLvChart, ["a", "LV1", "LV2", "LV3", "LV4", "LV5"], methodCountLvData)
  addData(allCharts.lineCountLvChart, lineCountLvLabels, lineCountLvData)
  addData(allCharts.companyCountChart, companyCountLabels, companyCountData)
  addData(allCharts.problemTypeChart, problemTypeDataLabels, problemTypeData)
}

// 언어 선택 버튼 클릭 시 차트 업데이트
function addData(chart, label, data) {
  chart.data.labels = label;
  chart.data.datasets.data = data;
  chart.update();
}

// 차트 프로퍼티 값을 리턴하는 함수들
function getMethodCountLvDatas(data) {
  return Object.values(data[language]['countmethod']);
}

function getlineCountLvDatas(data) {
  // 레벨 별 라인 수
  const lineCountLvData = Object.values(data[language]['countline']);
  const lineCountLvLabels = Object.keys(data[language]['countline']);
  return {lineCountLvData, lineCountLvLabels};
}

function getcompanyCountDatas(data) {
  // 출제 업체 수
  const companyCountData = Object.values(data[language]['countcompany']);
  const companyCountLabels = Object.keys(data[language]['countcompany']);
  return {companyCountData, companyCountLabels};
}

function getproblemTypeDatas(data) {
  // 전체 문제 유형
  const problemTypeData = Object.values(data[language]['countType'][problemTypeChartLv]);
  const problemTypeDataLabels = Object.keys(data[language]['countType'][problemTypeChartLv]);
  return {problemTypeData, problemTypeDataLabels};
}