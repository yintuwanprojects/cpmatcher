<template>
  <div>
    <div v-if="quizStatus === 'pre'">
      <div class="mb-4">
        <h2 style="color: white;" class="fw-bold">音兔万CP挑选器</h2>
        <br>
        <div class="slider-wrapper">
          <div class="slider">
            <div class="slider-text1">好多宇</div>
            <div class="slider-text2">元周率</div>
            <div class="slider-text3">赞就丸了</div>
            <div class="slider-text4">双宇电台</div>
          </div>
        </div>
      </div>
      <div class="button6" @click="startQuiz">开始测试</div>
    </div>
    <div v-if="quizStatus === 'during'" class="question-text m-2">
      <h4 class="m-2" style="white-space: pre-line">{{question}}</h4>
      <div class="d-flex justify-content-center">
        <div class="form-check">
          <input type="radio" id="yes" value="y" v-model="picked">
          <label for="yes"> 是</label>
          <br>
          <input type="radio" id="no" value="n" v-model="picked">
          <label for="no"> 不是</label>
          <br>
        </div>
      </div>
      <div>
        <div class="button6 options m-1" @click="chooseAns()">
          <strong>下一题</strong>
        </div>
      </div>
    </div>
    <div v-if="quizStatus === 'post'" class="question-text m-2">
      <h3>最适合你的万内CP是：</h3>
      <img :src="getImgUrl(chosenCPImg)" v-bind:alt="chosenCPImg">
      <h2>{{chosenCP}}</h2>
      <p class="people">{{cpPeople}}</p>
      <br>
      <div>
        <p>适配度前五名</p>
        <ul class="ranking text-light small">
          <li v-for="(value, name) in Object.fromEntries(Object.entries(sortedCPList).slice(0, 5))"
              :key="name">
            {{ cpNames[name] }}: {{ value }}
          </li>
        </ul>
      </div>
      <div class="button6 return m-1" @click="resetPage">再测一次</div>
    </div>
  </div>
</template>

<script>
import questions from "../static/questions.json"
import cp from "../static/cp.json"
import btnSound from "../assets/Tiny Button Push-SoundBible.com-513260752.wav"

export default {
  name: "Quiz",
  data: function () {
    return {
      questions: [],
      cpList: {},
      chosenCPImg: '',
      sortedCPList: {},
      cpPeople: '',
      currentQuestion: 0,
      picked: '',
      score: 0,
      quizStatus: "pre",
      sound: new Audio(btnSound)
    }
  },
  mounted: function () {
    this.resetPage();
  },
  computed: {
    question: function () {
      return this.questions[this.currentQuestion]['q']
    },
    cpNames: function () {
      let namePair = {};
      let cps = Object.keys(cp);
      cps.forEach(e => namePair[e] = cp[e]['name']);
      return namePair;
    }
  },
  methods: {
    startQuiz: function () {
      this.questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
      let cps = Object.keys(cp);
      cps.forEach(e => this.cpList[e] = 0);
      this.sound.play();
      this.quizStatus = 'during';
    },
    nextQuestion: function () {
      if (this.currentQuestion < (this.questions.length - 1)) {
        this.currentQuestion++;
      } else if (this.currentQuestion === (this.questions.length - 1)) {
        this.sortedCPList = Object.entries(this.cpList)
          .sort(([, a], [, b]) => b - a)
          .reduce((r, [k, v]) => ({...r, [k]: v}), {});
        let chosen = Object.keys(this.cpList).reduce((a, b) => this.cpList[a] > this.cpList[b] ? a : b);
        this.chosenCP = cp[chosen]['name'];
        this.chosenCPImg = cp[chosen]['img'];
        this.cpPeople = cp[chosen]['people'];
        this.quizStatus = 'post';
        this.sendAnalytics();
      }
    },
    getImgUrl(pic) {
      return require('../assets/images/'+pic)
    },
    chooseAns: function () {
      this.sound.play();
      let answer = this.questions[this.currentQuestion]['a'][this.picked];
      Object.keys(answer).forEach(e => this.cpList[e] = (this.cpList[e] + answer[e]));
      this.nextQuestion();
    },
    resetPage: function () {
      this.sound.play();
      this.questions = questions;
      this.chosenCP = '';
      this.picked = '';
      this.quizStatus = 'pre';
      this.cpList = {};
      this.cpPeople = '';
      this.chosenCPImg = '';
      this.currentQuestion = 0;
    },
    sendAnalytics: function () {
      this.$ga.event({
        eventCategory: 'CompleteQuiz',
        eventAction: 'completed',
        eventLabel: this.chosenCP,
      })
    }
  }
}
</script>

<style scoped>
.question-text {
  color: white;
}
.board {
  background-color: #282829;
  border-style: solid;
  border-width: 5px;
  border-color: darkgrey;
}
.mode {
  background-color: lavender;
}
img {
  width: auto;
  height: 150px;
  margin-bottom: 20px;
}
p.people {
  color: darkslategrey;
  margin-top: 10px;
  margin-bottom: 10px;
}
.ranking {
  text-align: left;
  margin: 0 60px 20px;
}
.selected {
  background-color: slateblue;
  color: whitesmoke;
}

</style>
