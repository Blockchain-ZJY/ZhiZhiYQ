<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- 网站页眉 -->
    <Header />

    <!-- 聊天机器人界面 -->
    <main class="grow bg-gradient-to-b from-slate-900 to-slate-800 relative py-16">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-full py-8">
        <!-- 智能技术顾问标题 -->
        <div class="text-center mb-8">
          <h1 class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-2">城乡智治Agent顾问</h1>
          <p class="text-slate-400">直接与我们的AI顾问对话，了解农业区块链、智能溯源与人工智能应用</p>
        </div>
        
        <!-- 聊天界面 -->
        <div class="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col" style="min-height: 60vh; max-height: calc(100vh - 260px);">
          <!-- 聊天头部 -->
          <div class="border-b border-slate-700 p-4 flex items-center">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <div class="text-sm font-medium text-slate-200">城乡智治Agent</div>
              <div class="text-xs text-slate-400 flex items-center">
                <span class="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                <span>在线</span>
              </div>
            </div>
            <div class="ml-auto text-xs text-slate-400 flex items-center">
              <span>由治智团队提供支持</span>
            </div>
          </div>
          
          <!-- 聊天消息区域 -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4" ref="chatContainer">
            <!-- 欢迎消息 -->
            <div class="flex items-start">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="bg-slate-700/50 rounded-lg rounded-tl-none p-4 max-w-3xl">
                <p class="text-slate-200">嗨，你好！我致力于解决各种城乡问题，为发展助力。</p>
                <p class="text-slate-200 mt-2">您可以询问：</p>
                <ul class="text-slate-300 mt-1 space-y-1 list-disc list-inside">
                  <li>区块链如何应用于农产品溯源？</li>
                  <li>人工智能在乡村振兴中的作用？</li>
                  <li>智能合约如何保障农产品交易安全？</li>
                  <li>边缘计算如何提升农业生产效率？</li>
                </ul>
              </div>
            </div>
            
            <!-- 动态消息区域 -->
            <div v-for="(message, index) in messages" :key="index" :class="message.isUser ? 'flex flex-row-reverse' : 'flex items-start'">
              <div v-if="message.isUser" class="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center ml-3 flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div v-else class="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div :class="[
                'p-4 max-w-3xl',
                message.isUser ? 'bg-indigo-600/30 rounded-lg rounded-tr-none text-white' : 'bg-slate-700/50 rounded-lg rounded-tl-none text-slate-200'
              ]" v-html="formatMessage(message.content)"></div>
            </div>
            
            <!-- 加载指示器 -->
            <div v-if="isTyping" class="flex items-start">
              <div class="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="bg-slate-700/50 rounded-lg rounded-tl-none p-4">
                <div class="flex space-x-2">
                  <div class="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
                  <div class="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style="animation-delay: 0.2s"></div>
                  <div class="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style="animation-delay: 0.4s"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 输入区域 -->
          <div class="border-t border-slate-700 p-4">
            <div class="flex items-end">
              <textarea 
                v-model="userInput" 
                class="flex-1 bg-slate-700/50 border border-slate-600 focus:border-indigo-500 rounded-lg px-4 py-3 text-slate-200 resize-none"
                placeholder="输入您的问题..." 
                rows="1"
                @input="autoResizeTextarea"
                @keydown.enter.prevent="sendMessage"
                ref="messageInput"
              ></textarea>
              <button 
                @click="sendMessage" 
                class="ml-2 h-12 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white disabled:opacity-50"
                :disabled="isTyping || !userInput.trim()"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- 底部说明 -->
        <div class="text-center mt-4 text-sm text-slate-500">
          <p>AI顾问基于乡村振兴领域知识库训练，可能并不了解全部最新信息</p>
        </div>
      </div>
    </main>


  </div>
</template>

<script>
import { ref, onMounted, nextTick, watch } from 'vue'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'TechnologyPage',
  components: {
    Header,
    Footer,
  },
  setup() {
    const messages = ref([]);
    const userInput = ref('');
    const isTyping = ref(false);
    const chatContainer = ref(null);
    const messageInput = ref(null);

    // 发送消息
    const sendMessage = async () => {
      const message = userInput.value.trim();
      if (!message || isTyping.value) return;
      
      // 添加用户消息
      messages.value.push({ content: message, isUser: true });
      userInput.value = '';
      
      // 自动调整文本框高度
      if (messageInput.value) {
        messageInput.value.style.height = 'auto';
      }
      
      // 设置正在输入状态
      isTyping.value = true;
      
      // 滚动到底部
      await scrollToBottom();
      
      try {
        // 调用Coze API
        await handleChatWithCoze(message);
      } catch (error) {
        console.error('聊天错误:', error);
        messages.value.push({ 
          content: '抱歉，发生了错误，请稍后再试。', 
          isUser: false 
        });
        isTyping.value = false;
        await scrollToBottom();
      }
    };

    // 调用Coze API
    const handleChatWithCoze = async (message) => {
      try {
        // 请求Coze API
        const response = await fetch('http://8.137.48.231:3001/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });
        
        // 检查响应状态
        if (!response.ok) {
          throw new Error('API请求失败');
        }
        
        // 读取响应流
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let botResponseText = '';
        let botMessageAdded = false;
        
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            break;
          }
          
          // 解码响应数据
          const text = decoder.decode(value);
          const lines = text.split('\n\n');
          
          for (const line of lines) {
            if (!line || !line.startsWith('data: ')) continue;
            
            const eventData = line.substring(6); // 移除 'data: ' 前缀
            
            if (eventData === '[DONE]') {
              continue;
            }
            
            try {
              const parsedData = JSON.parse(eventData);
              
              if (parsedData.event === 'conversation.message.delta') {
                // 获取内容增量
                const contentDelta = parsedData.data.content || '';
                botResponseText += contentDelta;
                
                // 如果是第一部分响应，创建新消息
                if (!botMessageAdded) {
                  messages.value.push({ content: botResponseText, isUser: false });
                  botMessageAdded = true;
                } else {
                  // 更新现有消息
                  messages.value[messages.value.length - 1].content = botResponseText;
                }
                
                // 滚动到底部
                await scrollToBottom();
              }
            } catch (error) {
              console.error('解析SSE数据错误:', error);
            }
          }
        }
        
        // 如果没有添加机器人消息，显示错误
        if (!botMessageAdded) {
          messages.value.push({ 
            content: '抱歉，我无法处理您的请求。', 
            isUser: false 
          });
        }
      } catch (error) {
        throw error;
      } finally {
        isTyping.value = false;
      }
    };

    // 自动调整文本框高度
    const autoResizeTextarea = () => {
      const textarea = messageInput.value;
      if (!textarea) return;
      
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    };

    // 滚动到底部
    const scrollToBottom = async () => {
      await nextTick();
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      }
    };

    // 格式化消息内容（支持基本的Markdown格式）
    const formatMessage = (content) => {
      if (!content) return '';
      
      // 处理代码块
      content = content.replace(/```([\s\S]*?)```/g, '<pre class="bg-slate-900 p-3 rounded-md my-2 overflow-x-auto"><code>$1</code></pre>');
      
      // 处理行内代码
      content = content.replace(/`([^`]+)`/g, '<code class="bg-slate-900 px-1 rounded">$1</code>');
      
      // 处理粗体
      content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // 处理斜体
      content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      // 处理链接
      content = content.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-indigo-400 hover:underline">$1</a>');
      
      // 处理换行
      content = content.replace(/\n/g, '<br>');
      
      return content;
    };

    // 在组件挂载后自动聚焦输入框
    onMounted(() => {
      if (messageInput.value) {
        messageInput.value.focus();
      }
      
      // 观察消息变化，自动滚动到底部
      watch(messages, () => {
        scrollToBottom();
      }, { deep: true });
    });

    return {
      messages,
      userInput,
      isTyping,
      chatContainer,
      messageInput,
      sendMessage,
      autoResizeTextarea,
      formatMessage
    };
  }
}
</script>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* 自定义滚动条 */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.1);
  border-radius: 8px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(99, 102, 241, 0.3);
  border-radius: 8px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(99, 102, 241, 0.5);
}
</style> 