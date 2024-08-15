<template>
  <div class="container">
    <div class="first">
      <h1>센터 소식</h1>
      <h2 style="font-weight: bold">구로 디지털 훈련센터 소개</h2>
      <section :class="{ 'slide-in': true, visible: firstSectionVisible }">
        <div class="qa-section">
          <div class="qa-item">
            <h2 class="question">
              Q. <strong>구로 디지털 훈련센터</strong>는 어떤 기관인가요?
            </h2>
            <p class="answer">
              <strong>A. </strong> 구로디지털훈련센터는 훈련생 역량 수준별 IT 훈련과정과
              기업이 원하는 유연한 <strong>맞춤훈련과정</strong>을 운영합니다.
              구로디지털훈련센터는 도시형 산업단지인 <strong>서울디지털산업단지</strong>에
              위치하여 기업체와 훈련생 모두에게 뛰어난 접근성을 자랑합니다.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="second">
      <h1>센터 개요</h1>
      <section
        v-for="(sectionGroup, groupIndex) in sectionGroups"
        :key="groupIndex"
        :class="[
          'section-group',
          {
            'slide-in-left': groupIndex % 2 === 0,
            'slide-in-right': groupIndex % 2 !== 0,
            visible: groupVisible[groupIndex],
          },
        ]"
        :style="getSectionStyle(groupIndex)"
      >
        <div class="bubble-wrapper">
          <div class="bubble-content" v-html="sectionGroup"></div>
        </div>
      </section>
    </div>

    <div class="third">
      <section
        class="carousel-section"
        @mousedown="startDrag"
        @mouseup="endDrag"
        @mousemove="onDrag"
        @mouseleave="endDrag"
        ref="carousel"
      >
        <div v-for="(image, index) in duplicatedImages" :key="index" class="image">
          <img :src="require(`@/assets/${image.filename}`)" :alt="image.title" />
        </div>
      </section>
    </div>

    <div class="for">
      <h2 class="section-title">오시는 길</h2>
      <div class="direction-container">
        <img
          v-for="(image, index) in directions"
          :key="index"
          :src="require(`@/assets/${image}`)"
          alt="오시는 길 이미지"
          class="direction-image"
        />
        <a
          v-for="(image, index) in directionss"
          :key="index"
          :href="'https://map.naver.com/p/entry/place/1333765145?c=15.00,0,0,0,dh'"
          target="_blank"
        >
          <img
            :src="require(`@/assets/${image}`)"
            alt="오시는 길 이미지"
            class="direction-imagee"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script src="@/assets/script/onemenu/Agency.js">
  import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  }
}
</script>

<style src="@/assets/style/firstmenu/Agency.css"></style>
