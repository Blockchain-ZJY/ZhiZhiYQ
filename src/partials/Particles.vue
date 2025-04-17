<template>
  <div class="particles-container" ref="particlesContainer">
    <canvas ref="particlesCanvas" class="particles-canvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Particles',
  props: {
    color: {
      type: String,
      default: '#00a0ff'
    },
    density: {
      type: Number,
      default: 70
    }
  },  
  setup(props) {
    const particlesCanvas = ref(null)
    const particlesContainer = ref(null)
    let particles = []
    let animationFrameId = null
    let ctx
    let width
    let height

    function initParticles() {
      particles = []
      const numParticles = props.density
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          density: Math.random() * 30 + 10,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          opacity: Math.random() * 0.5 + 0.2
        })
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, width, height)
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = props.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
        
        // 更新位置
        p.x += p.vx
        p.y += p.vy
        
        // 边界检查
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        
        // 连接粒子
        connectParticles(p, i)
      }
    }
    
    function connectParticles(p, index) {
      for (let j = index + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const distance = Math.sqrt(
          Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
        )
        
        if (distance < 150) {
          ctx.beginPath()
          ctx.strokeStyle = props.color
          ctx.globalAlpha = (150 - distance) / 1000
          ctx.lineWidth = 0.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }
    
    function animate() {
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    function resizeHandler() {
      width = particlesContainer.value.offsetWidth
      height = particlesContainer.value.offsetHeight
      particlesCanvas.value.width = width
      particlesCanvas.value.height = height
      initParticles()
    }

    onMounted(() => {
      ctx = particlesCanvas.value.getContext('2d')
      width = particlesContainer.value.offsetWidth
      height = particlesContainer.value.offsetHeight
      particlesCanvas.value.width = width
      particlesCanvas.value.height = height
      
      initParticles()
      animate()
      
      window.addEventListener('resize', resizeHandler)
    })
    
    onUnmounted(() => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeHandler)
    })

    return {
      particlesCanvas,
      particlesContainer
    }
  }
}
</script>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}
.particles-canvas {
  display: block;
  pointer-events: none;
}
</style>
