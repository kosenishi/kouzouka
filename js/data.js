// グローバルスコープに'var studyChart'を宣言する
var studyChart;

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('studyChart').getContext('2d');
    studyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: '学習時間 (分)',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '学習時間チャート'
                }
            }
        }
    });
    // チャートの初期化後にフィードバックを更新
    updateStudyFeedback();
});

// イベントリスナー内でも'studyChart'を使用可能にする
document.getElementById('studyDataForm').addEventListener('submit', function (e) {
    e.preventDefault(); // デフォルトのフォーム送信を防止

    var studyDate = document.getElementById('study-date').value;
    var studyTime = parseInt(document.getElementById('study-time').value, 10); // 入力は文字列なので数値に変換

    if (studyDate && studyTime) {
        studyChart.data.labels.push(studyDate); // 日付データを追加
        studyChart.data.datasets[0].data.push(studyTime); // 学習時間データを追加
        studyChart.update(); // チャートを更新

        // フォーム入力をリセット
        document.getElementById('studyDataForm').reset();

        // フォーム送信後、フィードバックメッセージを更新
        updateStudyFeedback();
    }
});

function updateStudyFeedback() {
    // チャートから現在のデータを取得
    var studyData = studyChart.data.datasets[0].data;

    // 学習時間の合計を計算
    var totalTime = studyData.reduce((a, b) => a + b, 0);

    // フィードバックメッセージを決定
    var message = "";
    if (totalTime === 0) {
        message = "まずは一題演習問題を解いてみよう！";
    } else if (totalTime >= 1 && totalTime <= 59) {
        message = "もう少し頑張ろう！！";
    } else if (totalTime >= 60) {
        message = "すごい！！この調子！";
    }

    // メッセージをHTMLに挿入
    document.getElementById("studyFeedback").innerText = message;
}
