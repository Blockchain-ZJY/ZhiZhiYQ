<template>
  <section class="relative">

    <!-- Blurred shape -->
    <div class="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stop-color="#6366F1" />
            <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#bs3-a)" fill-rule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">常见问题解答</h2>
          <p class="text-lg text-slate-400">了解更多关于智慧农业和乡村振兴的技术应用问题</p>
        </div>

        <!-- Q&A Categories -->
        <div class="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-xs mx-auto md:max-w-none -m-5">
          <!-- Block #1 -->
          <div class="text-center p-5">
            <div class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="fill-slate-200">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div class="font-bold text-slate-100 mb-1">技术创新</div>
            <p class="text-sm text-slate-400">探索AI、大数据在农业中的应用前景</p>
          </div>
          <!-- Block #2 -->
          <div class="text-center p-5">
            <div class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="fill-slate-200">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="font-bold text-slate-100 mb-1">产业发展</div>
            <p class="text-sm text-slate-400">解答农业产业数字化转型相关问题</p>
          </div>
          <!-- Block #3 -->
          <div class="text-center p-5">
            <div class="inline-flex items-center justify-center h-12 w-12 rounded-full border border-transparent [background:linear-gradient(theme(colors.slate.800),_theme(colors.slate.800))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="fill-slate-200">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="font-bold text-slate-100 mb-1">知识赋能</div>
            <p class="text-sm text-slate-400">提供智慧农业技术知识普及</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Q&A Content -->
    <div class="relative px-4 sm:px-6">
      <div class="max-w-3xl mx-auto py-12 md:py-20">
        <h3 class="h3 inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8 md:pb-16">热门问题</h3>
        <div class="space-y-8">
          <template v-for="(category, index) in qaItems" :key="index">
            <div>
              <h4 class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">{{ category.area }}</h4>
              <ul class="divide-y divide-slate-800">
                <template v-for="(qa, qaIndex) in category.questions" :key="qaIndex">
                  <li class="py-5">
                    <div class="flex flex-col space-y-3">
                      <div class="flex items-start">
                        <span class="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 text-purple-500 font-semibold mr-3">Q</span>
                        <p class="font-medium text-slate-50">{{ qa.question }}</p>
                      </div>
                      <div class="flex items-start pl-11">
                        <p class="text-slate-400">{{ qa.answer }}</p>
                      </div>
                    </div>
                  </li>
                </template>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'QandA',
  setup() {
    const qaItems = [
      {
        area: '技术创新问答',
        questions: [
          {
            question: '人工智能技术如何应用于农作物病虫害识别？',
            answer: '通过深度学习模型训练，结合图像识别技术，可以快速准确地识别农作物病虫害。系统通过分析叶片图像，能够及时发现病虫害征兆，提供防治建议。',
          },
          {
            question: '大数据技术如何助力农业生产决策？',
            answer: '通过收集气象、土壤、作物生长等多维度数据，结合机器学习算法，可以为农户提供精准的种植建议、灌溉方案和收获时机预测。',
          },
          {
            question: '物联网技术在智慧农业中的应用场景有哪些？',
            answer: '包括智能大棚环境监控、农田灌溉自动化、畜牧养殖监测等，通过传感器网络实时采集数据，实现农业生产的精细化管理。',
          },
        ]
      },
      {
        area: '产业发展问答',
        questions: [
          {
            question: '如何通过数字化手段提升农产品溯源能力？',
            answer: '结合区块链技术建立农产品全程追溯系统，从种植、采收、加工到物流全过程可追溯，保障食品安全，提升产品价值。',
          },
          {
            question: '智慧农业平台如何帮助农户提高生产效率？',
            answer: '通过整合农技知识库、专家在线问答、设备远程控制等功能，为农户提供一站式服务，降低生产成本，提高产出效益。',
          },
        ]
      },
      {
        area: '技术普及问答',
        questions: [
          {
            question: '农业数据采集设备的选择和使用方法？',
            answer: '根据不同监测需求选择相应的传感器设备，如温湿度传感器、土壤监测仪等。通过手机APP可实现便捷的数据查看和设备控制。',
          },
          {
            question: '如何利用智能设备实现农田自动化管理？',
            answer: '通过部署智能灌溉系统、气象站等设备，配合自动控制系统，可以实现农田水肥一体化管理、病虫害预警等功能。',
          },
          {
            question: '农业APP和小程序的实用功能有哪些？',
            answer: '包括农事提醒、病虫害图谱、市场行情、专家咨询等功能，帮助农户掌握种植技术，了解市场动态。',
          },
        ]
      },
    ]

    return {
      qaItems
    }
  }
}
</script>