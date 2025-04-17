<template>
  <section class="min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 md:py-16">
      <!-- 居中布局的容器 -->
      <div class="flex flex-col items-center justify-center text-center relative z-10">
        
        <!-- 装饰性网格线 -->
        <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
          <div class="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          <div class="absolute left-0 right-0 top-3/4 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <div class="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
          <div class="absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
        </div>
        
        <!-- 居中文本内容 -->
        <div class="w-full max-w-3xl mb-10 relative" data-aos="fade-up">
          <!-- 上部装饰元素 -->
          <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 opacity-30 pointer-events-none">
            <div class="absolute inset-0 rotate-45 border border-blue-400 rounded-lg"></div>
            <div class="absolute inset-2 -rotate-45 border border-blue-300 rounded-lg"></div>
          </div>
          
          <!-- 项目标签 -->
          <div class="mb-6 flex justify-center">
            <div class="inline-flex relative before:absolute before:inset-0 before:bg-blue-500 before:blur-md">
              <a class="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.blue.500),_theme(colors.blue.500))_padding-box,_linear-gradient(theme(colors.blue.500),_theme(colors.blue.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow" href="#0">
                <span class="relative inline-flex items-center">
                  <svg class="w-4 h-4 mr-1 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L3.98 9.483c-.784-.57-.381-1.81.587-1.81H8.03a1 1 0 00.95-.69L9.05 3.691z" />
                  </svg>
                  智治引擎研发项目 <span class="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </a>
            </div>
          </div>
          
          <!-- 主标题 -->
          <div class="relative">
            <div class="absolute -left-10 -top-10 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div class="absolute -right-10 -top-10 w-20 h-20 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <h1 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-blue-200/60 via-blue-200 to-blue-200/60 pb-4" data-aos="fade-up">智治引擎</h1>
          </div>
          
          <!-- 副标题 -->
          <p class="text-lg text-slate-300 mb-4" data-aos="fade-up" data-aos-delay="200">基于时空智能体的城乡治理与产业增值协同系统</p>
          
          <!-- 标语 -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-700/50 mb-8" data-aos="fade-up" data-aos-delay="300">
            <span class="block w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            <p class="text-md text-slate-300">赋能乡村振兴 · 构建智慧城乡一体化发展新模式</p>
            <span class="block w-2 h-2 rounded-full bg-blue-400 ml-2"></span>
          </div>
          
          <!-- 指示器 -->
          <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-60">
            <span class="block w-1 h-1 rounded-full bg-blue-400 animate-pulse"></span>
            <span class="block w-1 h-1 rounded-full bg-blue-300 animate-pulse animation-delay-500"></span>
            <span class="block w-1 h-1 rounded-full bg-blue-200 animate-pulse animation-delay-1000"></span>
          </div>
          
          <!-- 按钮组 -->
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10" data-aos="fade-up" data-aos-delay="400">
            <div>
              <a class="btn text-slate-900 bg-gradient-to-r from-blue-400/80 via-blue-400 to-blue-400/80 hover:bg-blue-400 w-full transition duration-150 ease-in-out group relative overflow-hidden shadow-lg" href="#0">
                <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-15 transition-transform group-hover:-translate-x-full duration-1000 ease-in-out"></span>
                <span class="relative flex items-center justify-center">
                  了解技术方案 <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-150 ease-in-out" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div>
              <a class="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 backdrop-blur-sm border border-slate-700/50 w-full transition duration-150 ease-in-out shadow-lg" href="#0">
                <svg class="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                </svg>
                <span>查看应用案例</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 全屏背景3D场景 -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div ref="sceneContainer" class="w-full h-full">
        <!-- Three.js 渲染在这里 -->
      </div>
    </div>
  </section>
</template>

<script>
import * as THREE from 'three'

// 通过在组件外部定义这些变量，完全避开Vue响应式系统
let scene, camera, renderer, fullscreenRenderer
let spheres = []
let lights = []
let raycaster, mouse, clock
let animationId = null

export default {
  name: 'Hero3D',
  data() {
    return {
      isInViewport: true
    }
  },
  mounted() {
    this.initThree()
    window.addEventListener('resize', this.onWindowResize)
    window.addEventListener('mousemove', this.onMouseMove)
    
    // 使用Intersection Observer监控元素可见性
    this.observer = new IntersectionObserver((entries) => {
      this.isInViewport = entries[0].isIntersecting
      if (this.isInViewport) {
        this.resumeAnimation()
      } else {
        this.pauseAnimation()
      }
    }, {
      threshold: 0.1
    })
    
    if (this.$refs.sceneContainer) {
      this.observer.observe(this.$refs.sceneContainer)
    }
    
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  },
  beforeUnmount() {
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    window.removeEventListener('resize', this.onWindowResize)
    window.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
    
    // 清除observer
    if (this.observer && this.$refs.sceneContainer) {
      this.observer.unobserve(this.$refs.sceneContainer)
      this.observer.disconnect()
    }
    
    this.disposeScene()
  },
  methods: {
    handleVisibilityChange() {
      if (document.hidden) {
        this.pauseAnimation()
      } else {
        this.resumeAnimation()
      }
    },
    
    checkVisibility() {
      if (!this.$refs.sceneContainer) return
      
      const rect = this.$refs.sceneContainer.getBoundingClientRect()
      const isVisible = (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      )
      
      if (isVisible !== this.isInViewport) {
        this.isInViewport = isVisible
        if (isVisible) {
          this.resumeAnimation()
        } else {
          this.pauseAnimation()
        }
      }
    },
    
    pauseAnimation() {
      if (animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      }
    },
    
    resumeAnimation() {
      if (!animationId && scene && camera) {
        this.animate()
      }
    },
    
    initThree() {
      try {
        const container = this.$refs.sceneContainer
        
        // 创建场景
        scene = new THREE.Scene()
        
        // 获取窗口尺寸，使用全屏
        const width = window.innerWidth
        const height = window.innerHeight
        
        // 调整相机位置以适应不同屏幕尺寸
        const distanceFactor = Math.max(1, Math.min(width, height) / 600)
        const cameraDistance = 150 * distanceFactor  // 增加相机距离
        
        // 创建透视相机 - 使用容器尺寸
        camera = new THREE.PerspectiveCamera(
          70,  // 视角增大
          width / height, 
          0.1, 
          1000
        )
        camera.position.set(0, 0, cameraDistance)
        camera.lookAt(0, 0, 0)
        
        // 创建主渲染器 - 设置为全屏
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true 
        })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(width, height)
        
        // 添加到DOM
        container.appendChild(renderer.domElement)
        
        // 初始化鼠标和射线检测器
        mouse = new THREE.Vector2()
        raycaster = new THREE.Raycaster()
        
        // 创建时钟
        clock = new THREE.Clock()
        
        // 创建光源
        this.createLights()
        
        // 创建3D网格球体
        this.createSpheres()
        
        // 开始动画
        this.animate()
        
      } catch (error) {
        console.error('初始化Three.js时出错:', error)
      }
    },
    
    onMouseMove(event) {
      if (!this.isInViewport) return
      
      // 计算鼠标在标准化设备坐标中的位置（从-1到+1）
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      
      // 根据鼠标位置轻微移动相机
      if (camera) {
        // 调整相机移动范围
        const distanceFactor = Math.max(1, Math.min(window.innerWidth, window.innerHeight) / 600)
        const cameraDistance = 100 * distanceFactor
        
        // 限制相机移动范围，使其只进行轻微调整
        const cameraOffset = new THREE.Vector3(
          mouse.x * 10,  // 水平偏移量
          mouse.y * 10,  // 垂直偏移量
          0              // 深度不变
        )
        
        // 平滑地将相机移向新位置
        camera.position.lerp(
          new THREE.Vector3(cameraOffset.x, cameraOffset.y, cameraDistance),
          0.03
        )
        
        // 始终保持相机看向场景中心
        camera.lookAt(0, 0, 0)
      }
    },
    
    createLights() {
      // 环境光 - 更亮一些
      const ambientLight = new THREE.AmbientLight(0x666666)
      scene.add(ambientLight)
      
      // 点光源1 - 蓝色
      const pointLight1 = new THREE.PointLight(0x3677ee, 3, 250)
      pointLight1.position.set(50, 40, 60)
      scene.add(pointLight1)
      lights.push(pointLight1)
      
      // 点光源2 - 青色
      const pointLight2 = new THREE.PointLight(0x00baff, 3, 250)
      pointLight2.position.set(-50, -40, 50)
      scene.add(pointLight2)
      lights.push(pointLight2)
      
      // 添加第三个光源 - 紫色
      const pointLight3 = new THREE.PointLight(0x6a11cb, 2, 200)
      pointLight3.position.set(0, 60, -40)
      scene.add(pointLight3)
      lights.push(pointLight3)
    },
    
    createSpheres() {
      // 计算基于屏幕大小的球体尺寸
      const screenMin = Math.min(window.innerWidth, window.innerHeight)
      const sizeFactor = Math.max(1.2, screenMin / 800)  // 增加尺寸因子
      
      // 主球体 - 调整尺寸以适应屏幕
      const mainGeometry = new THREE.IcosahedronGeometry(40 * sizeFactor, 3)  // 主球体变小
      const mainMaterial = new THREE.MeshPhongMaterial({
        color: 0x00baff,
        emissive: 0x003a6c,
        specular: 0xffffff,
        shininess: 30,
        transparent: true,
        opacity: 0.9,
        wireframe: true
      })
      
      const mainSphere = new THREE.Mesh(mainGeometry, mainMaterial)
      scene.add(mainSphere)
      spheres.push(mainSphere)
      
      // 次级球体 - 调整尺寸
      const smallGeometry = new THREE.IcosahedronGeometry(32 * sizeFactor, 2)  // 内球体变小
      const smallMaterial = new THREE.MeshPhongMaterial({
        color: 0x3677ee,
        emissive: 0x003a6c,
        specular: 0xffffff,
        shininess: 10,
        transparent: true,
        opacity: 0.6,
        wireframe: false
      })
      
      const smallSphere = new THREE.Mesh(smallGeometry, smallMaterial)
      scene.add(smallSphere)
      spheres.push(smallSphere)
      
      // 添加星空背景
      this.createStarField()
      
      // 粒子云 - 调整粒子范围以适应屏幕
      const particleCount = window.innerWidth < 768 ? 1000 : 3000  // 增加粒子数量
      const particlesGeometry = new THREE.BufferGeometry()
      const posArray = new Float32Array(particleCount * 3)
      
      for (let i = 0; i < particleCount; i++) {
        // 在球体周围随机分布粒子，扩大范围
        const radius = (65 + (Math.random() * 55)) * sizeFactor  // 扩大粒子云范围
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        
        posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta) // x
        posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) // y
        posArray[i * 3 + 2] = radius * Math.cos(phi) // z
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5,  // 粒子稍大
        color: 0x00baff,
        transparent: true,
        opacity: 0.6
      })
      
      const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particleMesh)
      spheres.push(particleMesh)
      
      // 添加连接节点
      this.createConnectingNodes()
    },
    
    createStarField() {
      // 创建星空背景
      const starCount = 1500
      const starsGeometry = new THREE.BufferGeometry()
      const starPositions = new Float32Array(starCount * 3)
      
      for (let i = 0; i < starCount; i++) {
        // 在远处随机分布星星
        const radius = 300 + Math.random() * 200
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        
        starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        starPositions[i * 3 + 2] = radius * Math.cos(phi)
      }
      
      starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
      
      const starsMaterial = new THREE.PointsMaterial({
        size: 0.7,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      })
      
      const starField = new THREE.Points(starsGeometry, starsMaterial)
      scene.add(starField)
      spheres.push(starField)
    },
    
    createConnectingNodes() {
      // 计算基于屏幕大小的节点尺寸和位置
      const screenMin = Math.min(window.innerWidth, window.innerHeight)
      const sizeFactor = Math.max(1.2, screenMin / 800)  // 增加尺寸因子
      
      // 创建更多节点，分布范围更广
      const nodePositions = [
        new THREE.Vector3(100 * sizeFactor, 40 * sizeFactor, 30 * sizeFactor),
        new THREE.Vector3(-90 * sizeFactor, 65 * sizeFactor, 40 * sizeFactor),
        new THREE.Vector3(80 * sizeFactor, -90 * sizeFactor, 25 * sizeFactor),
        new THREE.Vector3(-70 * sizeFactor, -65 * sizeFactor, -45 * sizeFactor),
        new THREE.Vector3(40 * sizeFactor, 95 * sizeFactor, -55 * sizeFactor),
        new THREE.Vector3(-85 * sizeFactor, -35 * sizeFactor, 80 * sizeFactor),
        new THREE.Vector3(90 * sizeFactor, 20 * sizeFactor, -60 * sizeFactor),
        new THREE.Vector3(-60 * sizeFactor, 70 * sizeFactor, -70 * sizeFactor),
        new THREE.Vector3(75 * sizeFactor, -40 * sizeFactor, 85 * sizeFactor),  // 添加更多节点
        new THREE.Vector3(-50 * sizeFactor, -80 * sizeFactor, -50 * sizeFactor),
        new THREE.Vector3(40 * sizeFactor, 85 * sizeFactor, 75 * sizeFactor),
        new THREE.Vector3(-95 * sizeFactor, 30 * sizeFactor, -40 * sizeFactor)
      ]
      
      // 节点几何体和材质 - 轻微增大节点尺寸
      const nodeGeometry = new THREE.SphereGeometry(2.5 * sizeFactor, 16, 16)  // 节点变大
      const nodeMaterial = new THREE.MeshPhongMaterial({
        color: 0x00ffff,
        emissive: 0x0088ff,
        shininess: 100
      })
      
      // 创建节点并添加到场景
      const nodes = []
      nodePositions.forEach(position => {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
        node.position.copy(position)
        scene.add(node)
        nodes.push(node)
        spheres.push(node)  // 添加到spheres数组以便动画更新
      })
      
      // 创建节点之间的连线 - 使用细线
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x0088ff,
        transparent: true,
        opacity: 0.4
      })
      
      // 连接每对节点 - 不是全连接，选择性连接使其看起来更自然
      for (let i = 0; i < nodes.length; i++) {
        // 只连接到相邻的几个节点
        const connections = [
          (i + 1) % nodes.length,
          (i + 3) % nodes.length
        ]
        
        connections.forEach(j => {
          if (Math.random() > 0.3) { // 70%的概率创建连接
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position
            ])
            const line = new THREE.Line(lineGeometry, lineMaterial)
            scene.add(line)
            spheres.push(line)
          }
        })
      }
      
      // 连接节点到主球体中心 - 所有节点都连接到中心
      for (let i = 0; i < nodes.length; i++) {
        const centerLineGeometry = new THREE.BufferGeometry().setFromPoints([
          nodes[i].position,
          new THREE.Vector3(0, 0, 0)
        ])
        const centerLine = new THREE.Line(centerLineGeometry, lineMaterial)
        scene.add(centerLine)
        spheres.push(centerLine)
      }
      
      // 添加节点脉冲动画 - 大小适应屏幕
      nodes.forEach(node => {
        const pulse = new THREE.Mesh(
          new THREE.SphereGeometry(2 * sizeFactor, 16, 16),  // 脉冲效果变大
          new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.8
          })
        )
        pulse.position.copy(node.position)
        pulse.scale.set(1, 1, 1)
        pulse.userData = { 
          isEffect: true,
          originalScale: 1,
          originalOpacity: 0.8,
          pulseSpeed: 0.8 + Math.random() * 0.5,
          node: node
        }
        scene.add(pulse)
        spheres.push(pulse)
      })
      
      // 添加更多数据流效果 - 在节点之间移动的粒子
      for (let i = 0; i < nodes.length * 1.5; i++) {  // 更多数据流
        const sourceIndex = i % nodes.length
        if (Math.random() > 0.3) { // 70%的节点有数据流
          const targetIndex = (sourceIndex + 1 + Math.floor(Math.random() * (nodes.length - 1))) % nodes.length
          
          const dataParticle = new THREE.Mesh(
            new THREE.SphereGeometry(1.2 * sizeFactor, 8, 8),  // 数据流粒子变大
            new THREE.MeshBasicMaterial({
              color: 0x00ffff,
              transparent: true,
              opacity: 0.9
            })
          )
          
          dataParticle.position.copy(nodes[sourceIndex].position)
          dataParticle.userData = {
            isDataFlow: true,
            startPoint: nodes[sourceIndex].position.clone(),
            endPoint: nodes[targetIndex].position.clone(),
            progress: 0,
            speed: 0.4 + Math.random() * 0.6
          }
          
          scene.add(dataParticle)
          spheres.push(dataParticle)
        }
      }
    },
    
    animate() {
      animationId = requestAnimationFrame(this.animate)
      
      const elapsedTime = clock.getElapsedTime()
      
      // 旋转主球体
      if (spheres[0]) {
        spheres[0].rotation.x = elapsedTime * 0.1
        spheres[0].rotation.y = elapsedTime * 0.15
      }
      
      // 反向旋转次级球体
      if (spheres[1]) {
        spheres[1].rotation.x = -elapsedTime * 0.12
        spheres[1].rotation.y = -elapsedTime * 0.1
      }
      
      // 旋转星空背景 - 非常缓慢
      if (spheres[2]) {
        spheres[2].rotation.y = elapsedTime * 0.01
        spheres[2].rotation.x = elapsedTime * 0.005
      }
      
      // 旋转粒子云
      if (spheres[3]) {
        spheres[3].rotation.y = elapsedTime * 0.05
      }
      
      // 更新脉冲效果和数据流
      spheres.forEach(object => {
        // 处理脉冲效果
        if (object.userData && object.userData.isEffect) {
          const pulse = object
          const speed = pulse.userData.pulseSpeed
          
          // 脉冲效果 - 放大然后淡出
          pulse.scale.set(
            pulse.userData.originalScale + Math.sin(elapsedTime * speed) * 2,
            pulse.userData.originalScale + Math.sin(elapsedTime * speed) * 2,
            pulse.userData.originalScale + Math.sin(elapsedTime * speed) * 2
          )
          
          pulse.material.opacity = pulse.userData.originalOpacity * 
            (1 - Math.abs(Math.sin(elapsedTime * speed)))
          
          // 跟随节点位置
          pulse.position.copy(pulse.userData.node.position)
        }
        
        // 处理数据流动画
        if (object.userData && object.userData.isDataFlow) {
          // 更新进度
          object.userData.progress += object.userData.speed * 0.01
          
          if (object.userData.progress >= 1) {
            // 重置进度
            object.userData.progress = 0
            
            // 交换起点和终点
            const temp = object.userData.startPoint.clone()
            object.userData.startPoint = object.userData.endPoint.clone()
            object.userData.endPoint = temp
          }
          
          // 计算当前位置 - 使用三次贝塞尔曲线使运动更自然
          const startPoint = object.userData.startPoint
          const endPoint = object.userData.endPoint
          const progress = object.userData.progress
          
          // 控制点 - 在中心点附近弯曲
          const centerOffset = new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          )
          const controlPoint = new THREE.Vector3(0, 0, 0).add(centerOffset)
          
          // 曲线插值 - 简单的二次贝塞尔曲线
          const p0 = startPoint
          const p1 = controlPoint
          const p2 = endPoint
          
          const t = progress
          const oneMinusT = 1 - t
          
          object.position.x = oneMinusT * oneMinusT * p0.x + 2 * oneMinusT * t * p1.x + t * t * p2.x
          object.position.y = oneMinusT * oneMinusT * p0.y + 2 * oneMinusT * t * p1.y + t * t * p2.y
          object.position.z = oneMinusT * oneMinusT * p0.z + 2 * oneMinusT * t * p1.z + t * t * p2.z
          
          // 脉动效果
          const scale = 0.7 + Math.sin(elapsedTime * 5) * 0.3
          object.scale.set(scale, scale, scale)
        }
      })
      
      // 移动光源
      if (lights[0]) {
        lights[0].position.x = Math.sin(elapsedTime * 0.5) * 60
        lights[0].position.z = Math.cos(elapsedTime * 0.5) * 60
      }
      
      if (lights[1]) {
        lights[1].position.x = Math.sin(elapsedTime * 0.5 + Math.PI) * 60
        lights[1].position.z = Math.cos(elapsedTime * 0.5 + Math.PI) * 60
      }
      
      // 第三个光源动画
      if (lights[2]) {
        lights[2].position.y = Math.sin(elapsedTime * 0.3) * 60
        lights[2].position.x = Math.cos(elapsedTime * 0.3) * 40
      }
      
      // 渲染局部场景
      if (renderer) {
        renderer.render(scene, camera)
      }
      
      // 渲染全屏场景
      if (fullscreenRenderer) {
        fullscreenRenderer.render(scene, camera)
      }
    },
    
    onWindowResize() {
      if (!camera || !renderer) return
    
      // 获取窗口尺寸
      const width = window.innerWidth
      const height = window.innerHeight
      
      // 更新渲染器
      renderer.setSize(width, height)
      
      // 更新相机
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    },
    
    disposeScene() {
      // 清理Three.js对象，防止内存泄漏
      if (scene) {
        scene.traverse((object) => {
          if (object.geometry) {
            object.geometry.dispose()
          }
          
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
      }
      
      if (renderer) {
        renderer.dispose()
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement)
        }
      }
      
      if (fullscreenRenderer) {
        fullscreenRenderer.dispose()
        if (fullscreenRenderer.domElement && fullscreenRenderer.domElement.parentNode) {
          fullscreenRenderer.domElement.parentNode.removeChild(fullscreenRenderer.domElement)
        }
      }
      
      // 清空引用
      scene = null
      camera = null
      renderer = null
      fullscreenRenderer = null
      spheres = []
      lights = []
      raycaster = null
      mouse = null
      clock = null
    }
  }
}
</script>

<style scoped>
section {
  background: linear-gradient(to bottom, #0d1117, #121622);
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.scene-container {
  width: 100%;
  height: 100%;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(20px, -20px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style> 