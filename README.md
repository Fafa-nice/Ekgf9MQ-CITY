**Description**: Mobile-first Web App for "Global Soul City Match" personality test. Includes 50 questions, elegant pastel design, and detailed personality analysis.
**Files**:
- index.html: Main entry point and layout structure. Refs: TailwindCSS, Lucide.
- style.css: Custom styles for elegant pastel aesthetics and transitions.
- questions.js: Contains the 50 personality and lifestyle questions.
- cities.js: Contains the city database with trait mappings and descriptions.
- app.js: Core logic for state management, scoring, and UI updates.
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>全球本命城市灵魂契合度测试</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-stone-50 text-stone-800 antialiased font-sans flex justify-center min-h-screen">
    <div id="app" class="w-full max-w-md bg-white min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        
        <!-- Welcome Screen -->
        <div id="screen-welcome" class="screen active flex flex-col items-center justify-center p-8 text-center h-full absolute inset-0 bg-gradient-to-br from-rose-50 to-teal-50">
            <h1 class="text-3xl font-serif mb-4 text-stone-700 leading-tight">如果灵魂有归处<br>它会落在地球的哪个坐标？</h1>
            <p class="text-stone-500 mb-12 text-sm leading-relaxed">通过50道深度性格与生活方式解析题，寻找与你灵魂最契合的本命城市。</p>
            <button id="btn-start" class="bg-stone-800 text-white px-8 py-4 rounded-full shadow-lg text-lg tracking-widest hover:bg-stone-700 transition-all active:scale-95">开始探寻</button>
        </div>

        <!-- Quiz Screen -->
        <div id="screen-quiz" class="screen flex flex-col h-full absolute inset-0 bg-gradient-to-b from-stone-50 to-white hidden">
            <!-- Progress -->
            <div class="px-6 py-4 flex items-center justify-between">
                <button id="btn-prev" class="p-2 text-stone-400 hover:text-stone-700 transition-colors invisible">
                    <i data-lucide="arrow-left"></i>
                </button>
                <div class="text-xs font-medium tracking-widest text-stone-400">
                    <span id="current-q">1</span> / <span id="total-q">50</span>
                </div>
                <div class="w-10"></div>
            </div>
            
            <div class="px-6 pb-2">
                <div class="w-full bg-stone-100 rounded-full h-1">
                    <div id="progress-bar" class="bg-stone-400 h-1 rounded-full transition-all duration-300" style="width: 2%"></div>
                </div>
            </div>

            <!-- Question -->
            <div class="flex-1 overflow-y-auto px-6 py-8 pb-24">
                <h2 id="question-text" class="text-2xl font-serif text-stone-800 mb-8 leading-snug"></h2>
                <div id="options-container" class="space-y-4">
                    <!-- Options injected here -->
                </div>
            </div>
        </div>

        <!-- Result Screen -->
        <div id="screen-result" class="screen flex flex-col h-full absolute inset-0 bg-[#fdfbf7] overflow-y-auto hidden">
            <div class="p-8 pb-20">
                <div class="text-center mb-10 mt-6">
                    <p class="text-xs tracking-[0.2em] text-stone-400 mb-3 uppercase">Your Soul City</p>
                    <h1 id="result-city" class="text-4xl font-serif text-stone-800 mb-2"></h1>
                    <p id="result-country" class="text-stone-500 text-sm tracking-wide"></p>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 border border-stone-100">
                    <h3 class="text-sm font-bold text-stone-800 mb-4 flex items-center tracking-widest uppercase">
                        <i data-lucide="user" class="w-4 h-4 mr-2 text-rose-300"></i> 性格深度解析
                    </h3>
                    <p id="analysis-personality" class="text-stone-600 text-sm leading-relaxed"></p>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 border border-stone-100">
                    <h3 class="text-sm font-bold text-stone-800 mb-4 flex items-center tracking-widest uppercase">
                        <i data-lucide="compass" class="w-4 h-4 mr-2 text-teal-300"></i> 生活方式匹配
                    </h3>
                    <p id="analysis-lifestyle" class="text-stone-600 text-sm leading-relaxed"></p>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 border border-stone-100">
                    <h3 class="text-sm font-bold text-stone-800 mb-4 flex items-center tracking-widest uppercase">
                        <i data-lucide="map-pin" class="w-4 h-4 mr-2 text-blue-300"></i> 为什么是这里？
                    </h3>
                    <p id="analysis-why" class="text-stone-600 text-sm leading-relaxed"></p>
                </div>

                <button id="btn-restart" class="w-full border border-stone-300 text-stone-600 py-4 rounded-full text-sm tracking-widest hover:bg-stone-50 transition-colors">重新测试</button>
            </div>
        </div>

    </div>
    
    <script type="module" src="app.js"></script>
</body>
</html>
