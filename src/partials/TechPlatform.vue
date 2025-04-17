<div class="absolute inset-0 pointer-events-none border border-slate-700 opacity-20 rounded-3xl"></div>
<div :class="{'opacity-10': isHovered !== index}" class="transition duration-500 relative z-10 p-5">
  <div class="flex items-center mb-2">
    <div 
      class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400 mr-3"
      :class="{'animate-pulse': isHovered === index}"
    >
      <component :is="item.icon" class="w-5 h-5 text-white fill-current" />
    </div>
    <h4 class="text-xl font-medium text-slate-50">{{ item.title }}</h4>
  </div>
  <div class="h-60 overflow-y-auto custom-scrollbar pr-2">
    <p class="text-slate-400">{{ item.description }}</p>
    <div v-if="item.features" class="mt-3">
      <div v-for="(feature, idx) in item.features" :key="idx" class="flex mb-2">
        <CheckIcon class="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
        <span class="text-slate-400">{{ feature }}</span>
      </div>
    </div>
  </div>
</div> 