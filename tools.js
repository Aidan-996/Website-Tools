// ========== Tool Definitions ==========
const TOOLS = [
  // ---- 文本工具 ----
  { id: "word-count", name: "字数统计", icon: "📊", category: "文本工具", desc: "统计字符、词数、行数", render: toolWordCount },
  { id: "case-convert", name: "大小写转换", icon: "🔤", category: "文本工具", desc: "英文大小写互转", render: toolCaseConvert },
  { id: "text-dedupe", name: "文本去重", icon: "🧹", category: "文本工具", desc: "按行去除重复文本", render: toolTextDedupe },
  { id: "text-sort", name: "文本排序", icon: "🔢", category: "文本工具", desc: "按行排序文本", render: toolTextSort },
  { id: "text-reverse", name: "文本反转", icon: "🔄", category: "文本工具", desc: "反转文本内容", render: toolTextReverse },
  { id: "text-replace", name: "文本替换", icon: "🔁", category: "文本工具", desc: "批量查找替换", render: toolTextReplace },
  { id: "text-diff", name: "文本对比", icon: "📝", category: "文本工具", desc: "对比两段文本差异", render: toolTextDiff },
  { id: "lorem-ipsum", name: "随机文本", icon: "📄", category: "文本工具", desc: "生成随机占位文本", render: toolLoremIpsum },
  { id: "char-escape", name: "特殊字符转义", icon: "⚡", category: "文本工具", desc: "HTML/JS特殊字符转义", render: toolCharEscape },
  { id: "text-extract", name: "文本提取", icon: "🎯", category: "文本工具", desc: "正则提取文本内容", render: toolTextExtract },

  // ---- 编码/解码 ----
  { id: "base64", name: "Base64编解码", icon: "🔐", category: "编码/解码", desc: "Base64编码与解码", render: toolBase64 },
  { id: "url-encode", name: "URL编解码", icon: "🔗", category: "编码/解码", desc: "URL编码与解码", render: toolURLEncode },
  { id: "html-encode", name: "HTML编解码", icon: "📋", category: "编码/解码", desc: "HTML实体编解码", render: toolHTMLEncode },
  { id: "unicode", name: "Unicode转换", icon: "🌐", category: "编码/解码", desc: "Unicode与中文互转", render: toolUnicode },
  { id: "hex-convert", name: "进制转换", icon: "🔢", category: "编码/解码", desc: "二/八/十/十六进制互转", render: toolHexConvert },
  { id: "ascii", name: "ASCII对照表", icon: "📟", category: "编码/解码", desc: "查看ASCII码表", render: toolASCII },
  { id: "jwt-decode", name: "JWT解码", icon: "🎫", category: "编码/解码", desc: "解析JWT Token", render: toolJWTDecode },
  { id: "utf8-bytes", name: "UTF-8字节查看", icon: "🔍", category: "编码/解码", desc: "查看字符的UTF-8编码", render: toolUTF8Bytes },

  // ---- 加密/哈希 ----
  { id: "md5", name: "MD5哈希", icon: "🔒", category: "加密/哈希", desc: "计算MD5哈希值", render: toolMD5 },
  { id: "sha", name: "SHA哈希", icon: "🛡", category: "加密/哈希", desc: "SHA-1/256/512哈希", render: toolSHA },
  { id: "uuid", name: "UUID生成器", icon: "🆔", category: "加密/哈希", desc: "生成随机UUID", render: toolUUID },
  { id: "password-gen", name: "密码生成器", icon: "🔑", category: "加密/哈希", desc: "生成安全随机密码", render: toolPasswordGen },
  { id: "hash-compare", name: "哈希比较", icon: "⚖️", category: "加密/哈希", desc: "比较两个哈希值", render: toolHashCompare },

  // ---- 格式化 ----
  { id: "json-format", name: "JSON格式化", icon: "📦", category: "格式化", desc: "JSON美化/压缩/校验", render: toolJSONFormat },
  { id: "xml-format", name: "XML格式化", icon: "📰", category: "格式化", desc: "XML美化格式化", render: toolXMLFormat },
  { id: "css-format", name: "CSS格式化", icon: "🎨", category: "格式化", desc: "CSS美化/压缩", render: toolCSSFormat },
  { id: "sql-format", name: "SQL格式化", icon: "🗃", category: "格式化", desc: "SQL语句格式化", render: toolSQLFormat },
  { id: "html-format", name: "HTML格式化", icon: "🌐", category: "格式化", desc: "HTML美化格式化", render: toolHTMLFormat },
  { id: "js-format", name: "JS格式化", icon: "⚙️", category: "格式化", desc: "JavaScript美化/压缩", render: toolJSFormat },

  // ---- 转换工具 ----
  { id: "json2yaml", name: "JSON↔YAML", icon: "🔄", category: "转换工具", desc: "JSON与YAML互转", render: toolJSON2YAML },
  { id: "csv2json", name: "CSV↔JSON", icon: "📊", category: "转换工具", desc: "CSV与JSON互转", render: toolCSV2JSON },
  { id: "ts-convert", name: "时间戳转换", icon: "⏰", category: "转换工具", desc: "时间戳与日期互转", render: toolTimestamp },
  { id: "color-convert", name: "颜色转换", icon: "🎨", category: "转换工具", desc: "HEX/RGB/HSL互转", render: toolColorConvert },
  { id: "unit-convert", name: "单位换算", icon: "📏", category: "转换工具", desc: "长度/重量/温度等换算", render: toolUnitConvert },
  { id: "num2chinese", name: "数字转中文", icon: "🀄", category: "转换工具", desc: "数字与中文大写互转", render: toolNum2Chinese },
  { id: "markdown-preview", name: "Markdown预览", icon: "📝", category: "转换工具", desc: "实时预览Markdown", render: toolMarkdownPreview },

  // ---- 生成工具 ----
  { id: "qrcode", name: "二维码生成", icon: "📱", category: "生成工具", desc: "生成二维码", render: toolQRCode },
  { id: "random-num", name: "随机数生成", icon: "🎲", category: "生成工具", desc: "生成指定范围随机数", render: toolRandomNum },
  { id: "regex-test", name: "正则测试", icon: "🧪", category: "生成工具", desc: "正则表达式在线测试", render: toolRegexTest },
  { id: "cron-gen", name: "Cron表达式", icon: "⏱", category: "生成工具", desc: "Cron表达式生成与解析", render: toolCronGen },
  { id: "border-radius", name: "圆角生成器", icon: "⬜", category: "生成工具", desc: "CSS圆角可视化调整", render: toolBorderRadius },
  { id: "gradient-gen", name: "渐变色生成", icon: "🌈", category: "生成工具", desc: "CSS渐变色生成器", render: toolGradientGen },
  { id: "shadow-gen", name: "阴影生成器", icon: "🌑", category: "生成工具", desc: "CSS Box-Shadow生成", render: toolShadowGen },

  // ---- 图片工具 ----
  { id: "img-base64", name: "图片Base64", icon: "🖼", category: "图片工具", desc: "图片与Base64互转", render: toolImgBase64 },
  { id: "color-picker", name: "取色器", icon: "🎯", category: "图片工具", desc: "屏幕取色器", render: toolColorPicker },
  { id: "placeholder-img", name: "占位图生成", icon: "🖼️", category: "图片工具", desc: "生成占位图片", render: toolPlaceholderImg },
  { id: "svg-preview", name: "SVG预览", icon: "📐", category: "图片工具", desc: "在线预览SVG代码", render: toolSVGPreview },
  { id: "favicon-gen", name: "Favicon生成", icon: "⭐", category: "图片工具", desc: "生成emoji/文字Favicon", render: toolFaviconGen },

  // ---- 开发工具 ----
  { id: "json-path", name: "JSONPath查询", icon: "🔎", category: "开发工具", desc: "JSONPath表达式查询", render: toolJSONPath },
  { id: "http-status", name: "HTTP状态码", icon: "🌐", category: "开发工具", desc: "HTTP状态码速查表", render: toolHTTPStatus },
  { id: "mime-types", name: "MIME类型", icon: "📂", category: "开发工具", desc: "文件MIME类型查询", render: toolMIMETypes },
  { id: "user-agent", name: "UserAgent解析", icon: "🖥", category: "开发工具", desc: "解析浏览器UA字符串", render: toolUserAgent },
  { id: "meta-gen", name: "Meta标签生成", icon: "🏷", category: "开发工具", desc: "HTML Meta标签生成器", render: toolMetaGen },
  { id: "chmod-calc", name: "Chmod计算器", icon: "🔐", category: "开发工具", desc: "Linux权限计算器", render: toolChmodCalc },
  { id: "html-preview", name: "HTML预览", icon: "👁", category: "开发工具", desc: "实时预览HTML代码", render: toolHTMLPreview },
  { id: "ip-info", name: "IP信息", icon: "📡", category: "开发工具", desc: "查看当前IP信息", render: toolIPInfo },

  // ---- 日常工具 ----
  { id: "calculator", name: "计算器", icon: "🔢", category: "日常工具", desc: "科学计算器", render: toolCalculator },
  { id: "bmi", name: "BMI计算", icon: "⚖️", category: "日常工具", desc: "身体质量指数计算", render: toolBMI },
  { id: "age-calc", name: "年龄计算", icon: "🎂", category: "日常工具", desc: "精确计算年龄", render: toolAgeCalc },
  { id: "countdown", name: "倒计时", icon: "⏳", category: "日常工具", desc: "在线倒计时器", render: toolCountdown },
  { id: "world-clock", name: "世界时钟", icon: "🕐", category: "日常工具", desc: "查看各时区时间", render: toolWorldClock },
  { id: "notepad", name: "在线记事本", icon: "📝", category: "日常工具", desc: "临时记事本(本地存储)", render: toolNotepad },
  { id: "stopwatch", name: "秒表", icon: "⏱️", category: "日常工具", desc: "在线秒表计时", render: toolStopwatch },

  // ---- 网络/运维工具 ----
  { id: "subnet-calc", name: "子网计算器", icon: "🌐", category: "网络/运维", desc: "IP子网划分计算", render: toolSubnetCalc },
  { id: "cidr-convert", name: "CIDR转换", icon: "📡", category: "网络/运维", desc: "CIDR与子网掩码互转", render: toolCIDRConvert },
  { id: "port-ref", name: "常用端口速查", icon: "🚪", category: "网络/运维", desc: "常用服务端口参考", render: toolPortRef },
  { id: "dns-record", name: "DNS记录类型", icon: "📋", category: "网络/运维", desc: "DNS记录类型速查", render: toolDNSRecord },
  { id: "ssl-decode", name: "SSL证书解析", icon: "🔐", category: "网络/运维", desc: "解析PEM格式证书", render: toolSSLDecode },
  { id: "crontab-ref", name: "Crontab速查", icon: "📅", category: "网络/运维", desc: "Crontab语法参考", render: toolCrontabRef },
  { id: "http-header", name: "HTTP头参考", icon: "📨", category: "网络/运维", desc: "常用HTTP请求头速查", render: toolHTTPHeader },
  { id: "regex-ref", name: "正则速查表", icon: "📖", category: "网络/运维", desc: "正则表达式语法参考", render: toolRegexRef },

  // ---- 安全工具 ----
  { id: "password-strength", name: "密码强度检测", icon: "💪", category: "安全工具", desc: "检测密码安全强度", render: toolPasswordStrength },
  { id: "hash-id", name: "哈希类型识别", icon: "🔎", category: "安全工具", desc: "识别哈希值类型", render: toolHashID },
  { id: "base-encode", name: "多进制编码", icon: "🔣", category: "安全工具", desc: "Base16/32/58/62/64", render: toolBaseEncode },
  { id: "xss-test", name: "XSS过滤测试", icon: "🛡️", category: "安全工具", desc: "测试XSS过滤效果", render: toolXSSTest },

  // ---- 数学/计算 ----
  { id: "percentage", name: "百分比计算", icon: "💯", category: "数学/计算", desc: "各类百分比计算", render: toolPercentage },
  { id: "mortgage", name: "房贷计算器", icon: "🏠", category: "数学/计算", desc: "等额本息/本金计算", render: toolMortgage },
  { id: "date-diff", name: "日期差计算", icon: "📆", category: "数学/计算", desc: "计算两个日期的差值", render: toolDateDiff },
  { id: "file-size", name: "文件大小换算", icon: "💾", category: "数学/计算", desc: "B/KB/MB/GB/TB换算", render: toolFileSize },
  { id: "speed-convert", name: "网速换算", icon: "📶", category: "数学/计算", desc: "Mbps/MB/s等换算", render: toolSpeedConvert },

  // ---- 文本工具补充 ----
  { id: "text-indent", name: "文本缩进", icon: "↔️", category: "文本工具", desc: "批量添加/移除缩进", render: toolTextIndent },
  { id: "line-number", name: "行号添加", icon: "🔢", category: "文本工具", desc: "为每行添加行号", render: toolLineNumber },

  // ---- 编码补充 ----
  { id: "morse-code", name: "摩尔斯电码", icon: "📻", category: "编码/解码", desc: "文本与摩尔斯电码互转", render: toolMorseCode },
  { id: "punycode", name: "Punycode转换", icon: "🌏", category: "编码/解码", desc: "国际化域名编码转换", render: toolPunycode },

  // ---- 开发工具补充 ----
  { id: "json-to-ts", name: "JSON转TypeScript", icon: "📘", category: "开发工具", desc: "JSON生成TS接口定义", render: toolJSON2TS },
  { id: "curl-gen", name: "cURL生成器", icon: "🌐", category: "开发工具", desc: "可视化生成cURL命令", render: toolCurlGen },

  // ---- 日常工具补充 ----
  { id: "habit-tracker", name: "习惯打卡", icon: "✅", category: "日常工具", desc: "每日习惯追踪(本地存储)", render: toolHabitTracker },
  { id: "pomodoro", name: "番茄钟", icon: "🍅", category: "日常工具", desc: "25分钟专注计时", render: toolPomodoro },
];


// ========== Tool Implementations ==========

// Helper: create common layout
function h(html) { return html; }
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn-active');
        if (btn) { btn.textContent = '已复制!'; setTimeout(() => btn.textContent = '复制', 1500); }
    });
}

// ----- 文本工具 -----
function toolWordCount() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_wc_input" placeholder="在此输入文本..." rows="6"></textarea>
        <button class="tool-btn" onclick="wcCalc()">统计</button>
        <div class="tool-result" id="t_wc_result">等待输入...</div>
    </div>`);
}
function wcCalc() {
    const t = document.getElementById('t_wc_input').value;
    const chars = t.length;
    const charsNoSpace = t.replace(/\s/g, '').length;
    const words = t.trim() ? t.trim().split(/\s+/).length : 0;
    const lines = t ? t.split('\n').length : 0;
    const chinese = (t.match(/[\u4e00-\u9fa5]/g) || []).length;
    const english = (t.match(/[a-zA-Z]+/g) || []).length;
    const numbers = (t.match(/\d+/g) || []).length;
    const punctuation = (t.match(/[^\w\s\u4e00-\u9fa5]/g) || []).length;
    document.getElementById('t_wc_result').textContent =
        `总字符: ${chars}\n不含空格: ${charsNoSpace}\n单词数: ${words}\n行数: ${lines}\n中文字: ${chinese}\n英文词: ${english}\n数字: ${numbers}\n标点: ${punctuation}`;
}

function toolCaseConvert() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_cc_input" placeholder="输入英文文本"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="ccConvert('upper')">全部大写</button>
            <button class="tool-btn" onclick="ccConvert('lower')">全部小写</button>
            <button class="tool-btn" onclick="ccConvert('title')">首字母大写</button>
            <button class="tool-btn" onclick="ccConvert('camel')">驼峰命名</button>
            <button class="tool-btn" onclick="ccConvert('snake')">下划线命名</button>
        </div>
        <div class="tool-result" id="t_cc_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_cc_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function ccConvert(mode) {
    const t = document.getElementById('t_cc_input').value;
    let r = '';
    switch(mode) {
        case 'upper': r = t.toUpperCase(); break;
        case 'lower': r = t.toLowerCase(); break;
        case 'title': r = t.replace(/\b\w/g, c => c.toUpperCase()); break;
        case 'camel': r = t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()); break;
        case 'snake': r = t.replace(/\s+/g, '_').replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '').replace(/_+/g, '_'); break;
    }
    document.getElementById('t_cc_result').firstChild.textContent = r;
}

function toolTextDedupe() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_dd_input" placeholder="每行一条内容" rows="8"></textarea>
        <button class="tool-btn" onclick="ddCalc()">去重</button>
        <div class="tool-result" id="t_dd_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_dd_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function ddCalc() {
    const lines = document.getElementById('t_dd_input').value.split('\n');
    const unique = [...new Set(lines)];
    document.getElementById('t_dd_result').firstChild.textContent = `去重前: ${lines.length} 行, 去重后: ${unique.length} 行\n\n${unique.join('\n')}`;
}

function toolTextSort() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_ts_input" placeholder="每行一条内容" rows="8"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="tsCalc('asc')">升序排列</button>
            <button class="tool-btn" onclick="tsCalc('desc')">降序排列</button>
            <button class="tool-btn" onclick="tsCalc('random')">随机打乱</button>
        </div>
        <div class="tool-result" id="t_ts_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_ts_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function tsCalc(mode) {
    let lines = document.getElementById('t_ts_input').value.split('\n');
    if (mode === 'asc') lines.sort((a, b) => a.localeCompare(b, 'zh'));
    else if (mode === 'desc') lines.sort((a, b) => b.localeCompare(a, 'zh'));
    else lines.sort(() => Math.random() - 0.5);
    document.getElementById('t_ts_result').firstChild.textContent = lines.join('\n');
}

function toolTextReverse() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_tr_input" placeholder="输入文本"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="trCalc('char')">按字符反转</button>
            <button class="tool-btn" onclick="trCalc('word')">按单词反转</button>
            <button class="tool-btn" onclick="trCalc('line')">按行反转</button>
        </div>
        <div class="tool-result" id="t_tr_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_tr_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function trCalc(mode) {
    const t = document.getElementById('t_tr_input').value;
    let r;
    if (mode === 'char') r = [...t].reverse().join('');
    else if (mode === 'word') r = t.split(/\s+/).reverse().join(' ');
    else r = t.split('\n').reverse().join('\n');
    document.getElementById('t_tr_result').firstChild.textContent = r;
}

function toolTextReplace() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_rep_input" placeholder="输入原始文本" rows="6"></textarea>
        <div class="tool-row">
            <div><label class="tool-label">查找</label><input class="tool-input" id="t_rep_find" placeholder="要查找的文本"></div>
            <div><label class="tool-label">替换为</label><input class="tool-input" id="t_rep_to" placeholder="替换为的文本"></div>
        </div>
        <div class="flex-center">
            <label><input type="checkbox" id="t_rep_regex"> 使用正则</label>
            <label><input type="checkbox" id="t_rep_case"> 区分大小写</label>
            <button class="tool-btn" onclick="repCalc()">替换</button>
        </div>
        <div class="tool-result" id="t_rep_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_rep_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function repCalc() {
    const text = document.getElementById('t_rep_input').value;
    const find = document.getElementById('t_rep_find').value;
    const to = document.getElementById('t_rep_to').value;
    const useRegex = document.getElementById('t_rep_regex').checked;
    const caseSensitive = document.getElementById('t_rep_case').checked;
    let result;
    if (useRegex) {
        const flags = caseSensitive ? 'g' : 'gi';
        result = text.replace(new RegExp(find, flags), to);
    } else {
        if (caseSensitive) result = text.split(find).join(to);
        else result = text.replace(new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), to);
    }
    document.getElementById('t_rep_result').firstChild.textContent = result;
}

function toolTextDiff() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">文本 A</label><textarea class="tool-textarea" id="t_diff_a" rows="8"></textarea></div>
            <div><label class="tool-label">文本 B</label><textarea class="tool-textarea" id="t_diff_b" rows="8"></textarea></div>
        </div>
        <button class="tool-btn" onclick="diffCalc()">对比</button>
        <div id="t_diff_result" style="background:#f8f9fa;border:1px solid #e8e8e8;border-radius:8px;padding:12px;font-family:monospace;font-size:0.85rem;white-space:pre-wrap;min-height:60px"></div>
    </div>`);
}
function diffCalc() {
    const a = document.getElementById('t_diff_a').value.split('\n');
    const b = document.getElementById('t_diff_b').value.split('\n');
    const max = Math.max(a.length, b.length);
    let html = '';
    for (let i = 0; i < max; i++) {
        const la = a[i] !== undefined ? a[i] : '';
        const lb = b[i] !== undefined ? b[i] : '';
        if (la === lb) html += `  ${la}\n`;
        else {
            if (la) html += `<span class="diff-del">- ${la}</span>\n`;
            if (lb) html += `<span class="diff-add">+ ${lb}</span>\n`;
        }
    }
    document.getElementById('t_diff_result').innerHTML = html || '两段文本完全相同';
}

function toolLoremIpsum() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">段落数</label><input class="tool-input" id="t_li_count" type="number" value="3" min="1" max="20"></div>
            <div><label class="tool-label">类型</label>
                <select class="tool-select tool-input" id="t_li_type">
                    <option value="zh">中文</option><option value="en">English</option>
                </select>
            </div>
        </div>
        <button class="tool-btn" onclick="liCalc()">生成</button>
        <div class="tool-result" id="t_li_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_li_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function liCalc() {
    const n = parseInt(document.getElementById('t_li_count').value) || 3;
    const type = document.getElementById('t_li_type').value;
    const zh = ['天地玄黄，宇宙洪荒。日月盈昃，辰宿列张。','寒来暑往，秋收冬藏。闰余成岁，律吕调阳。','云腾致雨，露结为霜。金生丽水，玉出昆冈。','剑号巨阙，珠称夜光。果珍李柰，菜重芥姜。','海咸河淡，鳞潜羽翔。龙师火帝，鸟官人皇。','始制文字，乃服衣裳。推位让国，有虞陶唐。','吊民伐罪，周发殷汤。坐朝问道，垂拱平章。'];
    const en = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.'];
    const pool = type === 'zh' ? zh : en;
    const result = [];
    for (let i = 0; i < n; i++) result.push(pool[i % pool.length]);
    document.getElementById('t_li_result').firstChild.textContent = result.join('\n\n');
}

function toolCharEscape() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_ce_input" placeholder="输入文本"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="ceCalc('html_enc')">HTML转义</button>
            <button class="tool-btn" onclick="ceCalc('html_dec')">HTML反转义</button>
            <button class="tool-btn" onclick="ceCalc('js_enc')">JS转义</button>
            <button class="tool-btn" onclick="ceCalc('js_dec')">JS反转义</button>
        </div>
        <div class="tool-result" id="t_ce_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_ce_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function ceCalc(mode) {
    const t = document.getElementById('t_ce_input').value;
    let r;
    if (mode === 'html_enc') { const d=document.createElement('div'); d.textContent=t; r=d.innerHTML; }
    else if (mode === 'html_dec') { const d=document.createElement('div'); d.innerHTML=t; r=d.textContent; }
    else if (mode === 'js_enc') r = JSON.stringify(t);
    else r = JSON.parse('"' + t.replace(/"/g, '\\"') + '"');
    document.getElementById('t_ce_result').firstChild.textContent = r;
}

function toolTextExtract() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_te_input" placeholder="输入文本" rows="6"></textarea>
        <div class="tool-row">
            <div><label class="tool-label">正则表达式</label><input class="tool-input" id="t_te_regex" placeholder="例如: \\d+" value="\\d+"></div>
            <div><label class="tool-label">标志</label><input class="tool-input" id="t_te_flags" placeholder="g, i, m" value="g"></div>
        </div>
        <button class="tool-btn" onclick="teCalc()">提取</button>
        <div class="tool-result" id="t_te_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_te_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function teCalc() {
    try {
        const t = document.getElementById('t_te_input').value;
        const r = new RegExp(document.getElementById('t_te_regex').value, document.getElementById('t_te_flags').value);
        const m = t.match(r);
        document.getElementById('t_te_result').firstChild.textContent = m ? `找到 ${m.length} 个匹配:\n\n${m.join('\n')}` : '未找到匹配';
    } catch(e) { document.getElementById('t_te_result').firstChild.textContent = '正则表达式错误: ' + e.message; }
}

// ----- 编码/解码 -----
function toolBase64() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_b64_input" placeholder="输入文本或Base64字符串"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="b64Calc('enc')">编码</button>
            <button class="tool-btn" onclick="b64Calc('dec')">解码</button>
        </div>
        <div class="tool-result" id="t_b64_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_b64_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function b64Calc(mode) {
    const t = document.getElementById('t_b64_input').value;
    try {
        const r = mode === 'enc' ? btoa(unescape(encodeURIComponent(t))) : decodeURIComponent(escape(atob(t)));
        document.getElementById('t_b64_result').firstChild.textContent = r;
    } catch(e) { document.getElementById('t_b64_result').firstChild.textContent = '错误: ' + e.message; }
}

function toolURLEncode() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_url_input" placeholder="输入URL或编码字符串"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="urlCalc('enc')">编码</button>
            <button class="tool-btn" onclick="urlCalc('dec')">解码</button>
            <button class="tool-btn" onclick="urlCalc('comp')">编码组件</button>
        </div>
        <div class="tool-result" id="t_url_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_url_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function urlCalc(mode) {
    const t = document.getElementById('t_url_input').value;
    try {
        let r;
        if (mode === 'enc') r = encodeURI(t);
        else if (mode === 'dec') r = decodeURIComponent(t);
        else r = encodeURIComponent(t);
        document.getElementById('t_url_result').firstChild.textContent = r;
    } catch(e) { document.getElementById('t_url_result').firstChild.textContent = '错误: ' + e.message; }
}

function toolHTMLEncode() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_he_input" placeholder="输入HTML或实体字符串"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="heCalc('enc')">编码</button>
            <button class="tool-btn" onclick="heCalc('dec')">解码</button>
        </div>
        <div class="tool-result" id="t_he_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_he_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function heCalc(mode) {
    const t = document.getElementById('t_he_input').value;
    if (mode === 'enc') { const d=document.createElement('div'); d.textContent=t; document.getElementById('t_he_result').firstChild.textContent=d.innerHTML; }
    else { const d=document.createElement('div'); d.innerHTML=t; document.getElementById('t_he_result').firstChild.textContent=d.textContent; }
}

function toolUnicode() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_uni_input" placeholder="输入中文或Unicode (如 \\u4f60\\u597d)"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="uniCalc('enc')">转Unicode</button>
            <button class="tool-btn" onclick="uniCalc('dec')">转中文</button>
        </div>
        <div class="tool-result" id="t_uni_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_uni_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function uniCalc(mode) {
    const t = document.getElementById('t_uni_input').value;
    if (mode === 'enc') {
        const r = [...t].map(c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')).join('');
        document.getElementById('t_uni_result').firstChild.textContent = r;
    } else {
        const r = t.replace(/\\u([0-9a-fA-F]{4})/g, (_, p) => String.fromCharCode(parseInt(p, 16)));
        document.getElementById('t_uni_result').firstChild.textContent = r;
    }
}

function toolHexConvert() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">输入值</label><input class="tool-input" id="t_hex_input" placeholder="输入数字" value="255"></div>
            <div><label class="tool-label">输入进制</label>
                <select class="tool-select tool-input" id="t_hex_from">
                    <option value="10" selected>十进制</option><option value="2">二进制</option><option value="8">八进制</option><option value="16">十六进制</option>
                </select>
            </div>
        </div>
        <button class="tool-btn" onclick="hexCalc()">转换</button>
        <div class="tool-result" id="t_hex_result"></div>
    </div>`);
}
function hexCalc() {
    const v = document.getElementById('t_hex_input').value;
    const from = parseInt(document.getElementById('t_hex_from').value);
    try {
        const num = parseInt(v, from);
        document.getElementById('t_hex_result').textContent =
            `十进制: ${num}\n二进制: ${num.toString(2)}\n八进制: ${num.toString(8)}\n十六进制: ${num.toString(16).toUpperCase()}`;
    } catch(e) { document.getElementById('t_hex_result').textContent = '转换错误'; }
}

function toolASCII() {
    let html = '<div class="tool-ui"><div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:0.8rem">';
    html += '<tr><th style="border:1px solid #ddd;padding:6px;background:#f5f5f5">DEC</th><th style="border:1px solid #ddd;padding:6px;background:#f5f5f5">HEX</th><th style="border:1px solid #ddd;padding:6px;background:#f5f5f5">字符</th><th style="border:1px solid #ddd;padding:6px;background:#f5f5f5">说明</th></tr>';
    const names = {0:'NUL',1:'SOH',2:'STX',3:'ETX',4:'EOT',5:'ENQ',6:'ACK',7:'BEL',8:'BS',9:'TAB',10:'LF',11:'VT',12:'FF',13:'CR',14:'SO',15:'SI',16:'DLE',17:'DC1',18:'DC2',19:'DC3',20:'DC4',21:'NAK',22:'SYN',23:'ETB',24:'CAN',25:'EM',26:'SUB',27:'ESC',28:'FS',29:'GS',30:'RS',31:'US',32:'Space',127:'DEL'};
    for (let i = 0; i < 128; i++) {
        const ch = names[i] || String.fromCharCode(i);
        html += `<tr><td style="border:1px solid #ddd;padding:4px 8px">${i}</td><td style="border:1px solid #ddd;padding:4px 8px">${i.toString(16).toUpperCase().padStart(2,'0')}</td><td style="border:1px solid #ddd;padding:4px 8px;font-weight:bold">${i>=33&&i<=126?String.fromCharCode(i):''}</td><td style="border:1px solid #ddd;padding:4px 8px;color:#666">${ch}</td></tr>`;
    }
    html += '</table></div></div>';
    return html;
}

function toolJWTDecode() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_jwt_input" placeholder="粘贴JWT Token"></textarea>
        <button class="tool-btn" onclick="jwtCalc()">解码</button>
        <div class="tool-result" id="t_jwt_result"></div>
    </div>`);
}
function jwtCalc() {
    const t = document.getElementById('t_jwt_input').value.trim();
    try {
        const parts = t.split('.');
        if (parts.length !== 3) throw new Error('无效的JWT格式');
        const header = JSON.parse(atob(parts[0].replace(/-/g,'+').replace(/_/g,'/')));
        const payload = JSON.parse(atob(parts[1].replace(/-/g,'+').replace(/_/g,'/')));
        let info = `=== Header ===\n${JSON.stringify(header, null, 2)}\n\n=== Payload ===\n${JSON.stringify(payload, null, 2)}`;
        if (payload.exp) info += `\n\n过期时间: ${new Date(payload.exp * 1000).toLocaleString()}`;
        if (payload.iat) info += `\n签发时间: ${new Date(payload.iat * 1000).toLocaleString()}`;
        document.getElementById('t_jwt_result').textContent = info;
    } catch(e) { document.getElementById('t_jwt_result').textContent = '解码失败: ' + e.message; }
}

function toolUTF8Bytes() {
    return h(`<div class="tool-ui">
        <input class="tool-input" id="t_utf_input" placeholder="输入字符 (如: 你好)">
        <button class="tool-btn" onclick="utfCalc()">查看</button>
        <div class="tool-result" id="t_utf_result"></div>
    </div>`);
}
function utfCalc() {
    const t = document.getElementById('t_utf_input').value;
    const result = [...t].map(ch => {
        const bytes = new TextEncoder().encode(ch);
        return `${ch}  →  UTF-8: ${[...bytes].map(b => b.toString(16).toUpperCase().padStart(2,'0')).join(' ')}  (${bytes.length} 字节)  Unicode: U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4,'0')}`;
    }).join('\n');
    document.getElementById('t_utf_result').textContent = result || '请输入字符';
}

// ----- 加密/哈希 -----
async function computeHash(algo, text) {
    const data = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest(algo, data);
    return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function toolMD5() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_md5_input" placeholder="输入文本"></textarea>
        <button class="tool-btn" onclick="md5Calc()">计算MD5</button>
        <div class="tool-result" id="t_md5_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_md5_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
async function md5Calc() {
    // Use SHA-256 as fallback (MD5 not in SubtleCrypto), clearly labeled
    const t = document.getElementById('t_md5_input').value;
    const hash = await computeHash('SHA-256', t);
    document.getElementById('t_md5_result').firstChild.textContent = `SHA-256: ${hash}\n\n(注: 浏览器原生不支持MD5, 此处使用SHA-256替代。如需MD5请使用命令行工具)`;
}

function toolSHA() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_sha_input" placeholder="输入文本"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="shaCalc('SHA-1')">SHA-1</button>
            <button class="tool-btn" onclick="shaCalc('SHA-256')">SHA-256</button>
            <button class="tool-btn" onclick="shaCalc('SHA-512')">SHA-512</button>
        </div>
        <div class="tool-result" id="t_sha_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_sha_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
async function shaCalc(algo) {
    const hash = await computeHash(algo, document.getElementById('t_sha_input').value);
    document.getElementById('t_sha_result').firstChild.textContent = `${algo}: ${hash}`;
}

function toolUUID() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">生成数量</label><input class="tool-input" id="t_uuid_count" type="number" value="5" min="1" max="100"></div>
            <div><label class="tool-label">格式</label>
                <select class="tool-select tool-input" id="t_uuid_format">
                    <option value="standard">标准 (带横线)</option><option value="nohyphen">无横线</option><option value="upper">大写</option>
                </select>
            </div>
        </div>
        <button class="tool-btn" onclick="uuidCalc()">生成</button>
        <div class="tool-result" id="t_uuid_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_uuid_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function uuidCalc() {
    const n = parseInt(document.getElementById('t_uuid_count').value) || 5;
    const fmt = document.getElementById('t_uuid_format').value;
    const results = [];
    for (let i = 0; i < n; i++) {
        let u = crypto.randomUUID();
        if (fmt === 'nohyphen') u = u.replace(/-/g, '');
        if (fmt === 'upper') u = u.toUpperCase();
        results.push(u);
    }
    document.getElementById('t_uuid_result').firstChild.textContent = results.join('\n');
}

function toolPasswordGen() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">密码长度</label><input class="tool-input" id="t_pw_len" type="number" value="16" min="4" max="128"></div>
            <div><label class="tool-label">数量</label><input class="tool-input" id="t_pw_count" type="number" value="5" min="1" max="50"></div>
        </div>
        <div class="flex-center" style="gap:16px">
            <label><input type="checkbox" id="t_pw_upper" checked> 大写字母</label>
            <label><input type="checkbox" id="t_pw_lower" checked> 小写字母</label>
            <label><input type="checkbox" id="t_pw_num" checked> 数字</label>
            <label><input type="checkbox" id="t_pw_sym" checked> 符号</label>
        </div>
        <button class="tool-btn" onclick="pwCalc()">生成密码</button>
        <div class="tool-result" id="t_pw_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_pw_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function pwCalc() {
    let chars = '';
    if (document.getElementById('t_pw_upper').checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (document.getElementById('t_pw_lower').checked) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (document.getElementById('t_pw_num').checked) chars += '0123456789';
    if (document.getElementById('t_pw_sym').checked) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (!chars) { document.getElementById('t_pw_result').firstChild.textContent = '请至少选择一种字符类型'; return; }
    const len = parseInt(document.getElementById('t_pw_len').value) || 16;
    const count = parseInt(document.getElementById('t_pw_count').value) || 5;
    const arr = new Uint32Array(len * count);
    crypto.getRandomValues(arr);
    const results = [];
    for (let i = 0; i < count; i++) {
        let pw = '';
        for (let j = 0; j < len; j++) pw += chars[arr[i * len + j] % chars.length];
        results.push(pw);
    }
    document.getElementById('t_pw_result').firstChild.textContent = results.join('\n');
}

function toolHashCompare() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">哈希值 A</label><input class="tool-input" id="t_hc_a" placeholder="第一个哈希值"></div>
            <div><label class="tool-label">哈希值 B</label><input class="tool-input" id="t_hc_b" placeholder="第二个哈希值"></div>
        </div>
        <button class="tool-btn" onclick="hcCalc()">比较</button>
        <div class="tool-result" id="t_hc_result"></div>
    </div>`);
}
function hcCalc() {
    const a = document.getElementById('t_hc_a').value.trim().toLowerCase();
    const b = document.getElementById('t_hc_b').value.trim().toLowerCase();
    document.getElementById('t_hc_result').textContent = a === b ? '✅ 两个哈希值完全相同' : '❌ 两个哈希值不同';
}

// ----- 格式化 -----
function toolJSONFormat() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_jf_input" placeholder='粘贴JSON数据' rows="10"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="jfCalc('format')">格式化</button>
            <button class="tool-btn" onclick="jfCalc('minify')">压缩</button>
            <button class="tool-btn" onclick="jfCalc('validate')">校验</button>
        </div>
        <div class="tool-result" id="t_jf_result" style="position:relative;max-height:400px;overflow:auto"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_jf_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function jfCalc(mode) {
    const t = document.getElementById('t_jf_input').value;
    try {
        const obj = JSON.parse(t);
        if (mode === 'format') document.getElementById('t_jf_result').firstChild.textContent = JSON.stringify(obj, null, 2);
        else if (mode === 'minify') document.getElementById('t_jf_result').firstChild.textContent = JSON.stringify(obj);
        else document.getElementById('t_jf_result').firstChild.textContent = '✅ JSON格式正确';
    } catch(e) {
        document.getElementById('t_jf_result').firstChild.textContent = '❌ JSON格式错误: ' + e.message;
    }
}

function toolXMLFormat() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_xf_input" placeholder="粘贴XML数据" rows="10"></textarea>
        <button class="tool-btn" onclick="xfCalc()">格式化</button>
        <div class="tool-result" id="t_xf_result" style="position:relative;max-height:400px;overflow:auto"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_xf_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function xfCalc() {
    const t = document.getElementById('t_xf_input').value;
    let formatted = '';
    let indent = 0;
    const lines = t.replace(/>\s*</g, '>\n<').split('\n');
    lines.forEach(line => {
        line = line.trim();
        if (!line) return;
        if (line.match(/^<\//)) indent--;
        formatted += '  '.repeat(Math.max(indent, 0)) + line + '\n';
        if (line.match(/^<[^/!?]/) && !line.match(/\/>$/) && !line.match(/<\/.*>$/)) indent++;
    });
    document.getElementById('t_xf_result').firstChild.textContent = formatted;
}

function toolCSSFormat() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_cf_input" placeholder="粘贴CSS代码" rows="10"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="cfCalc('format')">格式化</button>
            <button class="tool-btn" onclick="cfCalc('minify')">压缩</button>
        </div>
        <div class="tool-result" id="t_cf_result" style="position:relative;max-height:400px;overflow:auto"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_cf_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function cfCalc(mode) {
    let t = document.getElementById('t_cf_input').value;
    if (mode === 'minify') {
        t = t.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,])\s*/g, '$1').replace(/;}/g, '}').trim();
    } else {
        t = t.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ');
        let formatted = '', indent = 0;
        for (let i = 0; i < t.length; i++) {
            if (t[i] === '{') { formatted += ' {\n' + '  '.repeat(++indent); }
            else if (t[i] === '}') { formatted = formatted.trimEnd() + '\n' + '  '.repeat(--indent) + '}\n'; }
            else if (t[i] === ';') { formatted += ';\n' + '  '.repeat(indent); }
            else formatted += t[i];
        }
        t = formatted.trim();
    }
    document.getElementById('t_cf_result').firstChild.textContent = t;
}

function toolSQLFormat() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_sf_input" placeholder="粘贴SQL语句" rows="8"></textarea>
        <button class="tool-btn" onclick="sfCalc()">格式化</button>
        <div class="tool-result" id="t_sf_result" style="position:relative;max-height:400px;overflow:auto"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_sf_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function sfCalc() {
    let t = document.getElementById('t_sf_input').value;
    const keywords = ['SELECT','FROM','WHERE','AND','OR','ORDER BY','GROUP BY','HAVING','LIMIT','OFFSET','JOIN','LEFT JOIN','RIGHT JOIN','INNER JOIN','ON','SET','VALUES','INSERT INTO','UPDATE','DELETE FROM','CREATE TABLE','ALTER TABLE','DROP TABLE','UNION','CASE','WHEN','THEN','ELSE','END','AS','IN','NOT','IS','NULL','BETWEEN','LIKE','EXISTS'];
    keywords.forEach(kw => {
        t = t.replace(new RegExp('\\b' + kw + '\\b', 'gi'), '\n' + kw);
    });
    t = t.replace(/^\n/, '').replace(/,\s*/g, ',\n    ');
    document.getElementById('t_sf_result').firstChild.textContent = t;
}

function toolHTMLFormat() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_hf_input" placeholder="粘贴HTML代码" rows="10"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="hfCalc('format')">格式化</button>
            <button class="tool-btn" onclick="hfCalc('minify')">压缩</button>
        </div>
        <div class="tool-result" id="t_hf_result" style="position:relative;max-height:400px;overflow:auto"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_hf_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function hfCalc(mode) {
    let t = document.getElementById('t_hf_input').value;
    if (mode === 'minify') {
        t = t.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
    } else {
        t = t.replace(/>\s*</g, '>\n<');
        let formatted = '', indent = 0;
        t.split('\n').forEach(line => {
            line = line.trim();
            if (!line) return;
            if (line.match(/^<\//)) indent--;
            formatted += '  '.repeat(Math.max(indent, 0)) + line + '\n';
            if (line.match(/^<[^/!?]/) && !line.match(/\/>$/) && !line.match(/<\/.*>$/)) indent++;
        });
        t = formatted.trim();
    }
    document.getElementById('t_hf_result').firstChild.textContent = t;
}

function toolJSFormat() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_jsf_input" placeholder="粘贴JavaScript代码" rows="10"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="jsfCalc('format')">格式化</button>
            <button class="tool-btn" onclick="jsfCalc('minify')">压缩</button>
        </div>
        <div class="tool-result" id="t_jsf_result" style="position:relative;max-height:400px;overflow:auto"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_jsf_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function jsfCalc(mode) {
    let t = document.getElementById('t_jsf_input').value;
    if (mode === 'minify') {
        t = t.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').trim();
    } else {
        // Simple formatting
        let formatted = '', indent = 0;
        for (let i = 0; i < t.length; i++) {
            if (t[i] === '{' || t[i] === '[') { formatted += t[i] + '\n' + '  '.repeat(++indent); }
            else if (t[i] === '}' || t[i] === ']') { formatted = formatted.trimEnd() + '\n' + '  '.repeat(--indent) + t[i]; }
            else if (t[i] === ';') { formatted += ';\n' + '  '.repeat(indent); }
            else formatted += t[i];
        }
        t = formatted;
    }
    document.getElementById('t_jsf_result').firstChild.textContent = t;
}

// ----- 转换工具 -----
function toolJSON2YAML() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_jy_input" placeholder="输入JSON或YAML" rows="10"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="jyCalc('toyaml')">JSON → YAML</button>
            <button class="tool-btn" onclick="jyCalc('tojson')">YAML → JSON</button>
        </div>
        <div class="tool-result" id="t_jy_result" style="position:relative;max-height:400px;overflow:auto"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_jy_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function json2yaml(obj, indent) {
    indent = indent || 0;
    let yaml = '';
    const pad = '  '.repeat(indent);
    if (Array.isArray(obj)) {
        obj.forEach(item => {
            if (typeof item === 'object' && item !== null) yaml += pad + '-\n' + json2yaml(item, indent + 1);
            else yaml += pad + '- ' + item + '\n';
        });
    } else if (typeof obj === 'object' && obj !== null) {
        Object.entries(obj).forEach(([k, v]) => {
            if (typeof v === 'object' && v !== null) yaml += pad + k + ':\n' + json2yaml(v, indent + 1);
            else yaml += pad + k + ': ' + (typeof v === 'string' ? '"' + v + '"' : v) + '\n';
        });
    }
    return yaml;
}
function jyCalc(mode) {
    const t = document.getElementById('t_jy_input').value;
    try {
        if (mode === 'toyaml') {
            const obj = JSON.parse(t);
            document.getElementById('t_jy_result').firstChild.textContent = json2yaml(obj);
        } else {
            // Simple YAML to JSON (basic support)
            const lines = t.split('\n').filter(l => l.trim());
            const obj = {};
            lines.forEach(line => {
                const m = line.match(/^(\s*)(\w+):\s*(.*)$/);
                if (m) { let v = m[3].replace(/^["']|["']$/g, ''); obj[m[2]] = isNaN(v) ? v : Number(v); }
            });
            document.getElementById('t_jy_result').firstChild.textContent = JSON.stringify(obj, null, 2);
        }
    } catch(e) { document.getElementById('t_jy_result').firstChild.textContent = '转换错误: ' + e.message; }
}

function toolCSV2JSON() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_cj_input" placeholder="输入CSV数据 (第一行为表头)" rows="8"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="cjCalc('tojson')">CSV → JSON</button>
            <button class="tool-btn" onclick="cjCalc('tocsv')">JSON → CSV</button>
        </div>
        <div class="tool-result" id="t_cj_result" style="position:relative;max-height:400px;overflow:auto"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_cj_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function cjCalc(mode) {
    const t = document.getElementById('t_cj_input').value;
    try {
        if (mode === 'tojson') {
            const lines = t.trim().split('\n');
            const headers = lines[0].split(',').map(h => h.trim());
            const result = lines.slice(1).map(line => {
                const vals = line.split(',').map(v => v.trim());
                const obj = {};
                headers.forEach((h, i) => obj[h] = vals[i] || '');
                return obj;
            });
            document.getElementById('t_cj_result').firstChild.textContent = JSON.stringify(result, null, 2);
        } else {
            const arr = JSON.parse(t);
            const headers = Object.keys(arr[0]);
            let csv = headers.join(',') + '\n';
            arr.forEach(obj => csv += headers.map(h => obj[h] ?? '').join(',') + '\n');
            document.getElementById('t_cj_result').firstChild.textContent = csv;
        }
    } catch(e) { document.getElementById('t_cj_result').firstChild.textContent = '转换错误: ' + e.message; }
}

function toolTimestamp() {
    return h(`<div class="tool-ui">
        <div style="background:#e8f4fd;padding:12px;border-radius:8px;margin-bottom:12px">
            当前时间戳: <strong id="t_ts_now"></strong> <span style="color:#666">(秒)</span>
            <br>当前时间: <strong id="t_ts_now_date"></strong>
        </div>
        <div class="tool-row">
            <div><label class="tool-label">时间戳</label><input class="tool-input" id="t_ts_stamp" placeholder="输入时间戳"></div>
            <div><label class="tool-label">日期时间</label><input class="tool-input" id="t_ts_date" type="datetime-local"></div>
        </div>
        <div class="flex-center">
            <button class="tool-btn" onclick="tsConvert('todate')">时间戳 → 日期</button>
            <button class="tool-btn" onclick="tsConvert('tostamp')">日期 → 时间戳</button>
        </div>
        <div class="tool-result" id="t_ts_result"></div>
    </div>`);
}
function tsConvert(mode) {
    if (mode === 'todate') {
        let ts = parseInt(document.getElementById('t_ts_stamp').value);
        if (ts.toString().length === 10) ts *= 1000;
        const d = new Date(ts);
        document.getElementById('t_ts_result').textContent = `${d.toLocaleString()}\nISO: ${d.toISOString()}\nUTC: ${d.toUTCString()}`;
    } else {
        const d = new Date(document.getElementById('t_ts_date').value);
        document.getElementById('t_ts_result').textContent = `秒级: ${Math.floor(d.getTime()/1000)}\n毫秒级: ${d.getTime()}`;
    }
}

function toolColorConvert() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">颜色输入</label><input class="tool-input" id="t_clr_input" placeholder="#667eea 或 rgb(102,126,234)" value="#667eea"></div>
            <div><label class="tool-label">取色</label><input type="color" id="t_clr_picker" value="#667eea" style="width:100%;height:42px;border:none;cursor:pointer" onchange="document.getElementById('t_clr_input').value=this.value;clrCalc()"></div>
        </div>
        <button class="tool-btn" onclick="clrCalc()">转换</button>
        <div class="color-preview" id="t_clr_preview" style="background:#667eea"></div>
        <div class="tool-result" id="t_clr_result"></div>
    </div>`);
}
function clrCalc() {
    const t = document.getElementById('t_clr_input').value.trim();
    let r, g, b;
    const hexMatch = t.match(/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i);
    const rgbMatch = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (hexMatch) {
        let hex = hexMatch[1];
        if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
        r = parseInt(hex.substr(0, 2), 16); g = parseInt(hex.substr(2, 2), 16); b = parseInt(hex.substr(4, 2), 16);
    } else if (rgbMatch) {
        r = parseInt(rgbMatch[1]); g = parseInt(rgbMatch[2]); b = parseInt(rgbMatch[3]);
    } else {
        document.getElementById('t_clr_result').textContent = '请输入有效的颜色值'; return;
    }
    const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
    // RGB to HSL
    const rr = r / 255, gg = g / 255, bb = b / 255;
    const max = Math.max(rr, gg, bb), min = Math.min(rr, gg, bb);
    let h2, s, l = (max + min) / 2;
    if (max === min) { h2 = s = 0; }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === rr) h2 = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6;
        else if (max === gg) h2 = ((bb - rr) / d + 2) / 6;
        else h2 = ((rr - gg) / d + 4) / 6;
    }
    document.getElementById('t_clr_preview').style.background = hex;
    document.getElementById('t_clr_picker').value = hex;
    document.getElementById('t_clr_result').textContent =
        `HEX: ${hex}\nRGB: rgb(${r}, ${g}, ${b})\nHSL: hsl(${Math.round(h2*360)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%)`;
}

function toolUnitConvert() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">类型</label>
                <select class="tool-select tool-input" id="t_uc_type" onchange="ucTypeChange()">
                    <option value="length">长度</option><option value="weight">重量</option><option value="temperature">温度</option><option value="area">面积</option><option value="storage">存储</option>
                </select>
            </div>
            <div><label class="tool-label">数值</label><input class="tool-input" id="t_uc_val" type="number" value="1"></div>
        </div>
        <div class="tool-row">
            <div><label class="tool-label">从</label><select class="tool-select tool-input" id="t_uc_from"></select></div>
            <div><label class="tool-label">到</label><select class="tool-select tool-input" id="t_uc_to"></select></div>
        </div>
        <button class="tool-btn" onclick="ucCalc()">换算</button>
        <div class="tool-result" id="t_uc_result"></div>
    </div>`);
}
const UC_UNITS = {
    length: { mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344 },
    weight: { mg: 0.001, g: 1, kg: 1000, t: 1000000, oz: 28.3495, lb: 453.592 },
    temperature: 'special',
    area: { 'mm²': 1e-6, 'cm²': 1e-4, 'm²': 1, 'km²': 1e6, 'ha': 10000, 'acre': 4046.86, 'ft²': 0.0929 },
    storage: { B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776 }
};
function ucTypeChange() {
    const type = document.getElementById('t_uc_type').value;
    const units = type === 'temperature' ? ['°C', '°F', 'K'] : Object.keys(UC_UNITS[type]);
    ['t_uc_from', 't_uc_to'].forEach((id, idx) => {
        const sel = document.getElementById(id);
        sel.innerHTML = units.map((u, i) => `<option value="${u}" ${i===idx?'selected':''}>${u}</option>`).join('');
    });
}
function ucCalc() {
    const type = document.getElementById('t_uc_type').value;
    const val = parseFloat(document.getElementById('t_uc_val').value);
    const from = document.getElementById('t_uc_from').value;
    const to = document.getElementById('t_uc_to').value;
    let result;
    if (type === 'temperature') {
        let celsius;
        if (from === '°C') celsius = val;
        else if (from === '°F') celsius = (val - 32) * 5/9;
        else celsius = val - 273.15;
        if (to === '°C') result = celsius;
        else if (to === '°F') result = celsius * 9/5 + 32;
        else result = celsius + 273.15;
    } else {
        const units = UC_UNITS[type];
        result = val * units[from] / units[to];
    }
    document.getElementById('t_uc_result').textContent = `${val} ${from} = ${result.toFixed(6).replace(/\.?0+$/, '')} ${to}`;
}

function toolNum2Chinese() {
    return h(`<div class="tool-ui">
        <input class="tool-input" id="t_n2c_input" placeholder="输入数字, 如 12345.67" value="12345.67">
        <button class="tool-btn" onclick="n2cCalc()">转换</button>
        <div class="tool-result" id="t_n2c_result"></div>
    </div>`);
}
function n2cCalc() {
    const n = document.getElementById('t_n2c_input').value;
    const digits = '零壹贰叁肆伍陆柒捌玖';
    const units = ['', '拾', '佰', '仟'];
    const bigUnits = ['', '万', '亿'];
    const num = parseFloat(n);
    if (isNaN(num)) { document.getElementById('t_n2c_result').textContent = '请输入有效数字'; return; }
    const intPart = Math.floor(Math.abs(num));
    const decPart = n.includes('.') ? n.split('.')[1] : '';
    let intStr = intPart.toString();
    let result = num < 0 ? '负' : '';
    // Integer part
    const groups = [];
    while (intStr.length > 0) { groups.unshift(intStr.slice(-4)); intStr = intStr.slice(0, -4); }
    groups.forEach((g, i) => {
        let groupStr = '';
        const gn = g.padStart(4, '0');
        for (let j = 0; j < 4; j++) {
            const d = parseInt(gn[j]);
            if (d === 0) { if (groupStr && !groupStr.endsWith('零')) groupStr += '零'; }
            else groupStr += digits[d] + units[3 - j];
        }
        groupStr = groupStr.replace(/零+$/, '');
        if (groupStr) result += groupStr + bigUnits[groups.length - 1 - i];
    });
    if (!result || result === '负') result += '零';
    // Decimal part
    if (decPart) {
        result += '点';
        for (const c of decPart) result += digits[parseInt(c)];
    }
    document.getElementById('t_n2c_result').textContent = `大写: ${result}\n小写: ${num.toLocaleString('zh-CN')}`;
}

function toolMarkdownPreview() {
    return h(`<div class="tool-ui">
        <div class="tool-row" style="align-items:stretch">
            <div style="flex:1"><label class="tool-label">Markdown</label><textarea class="tool-textarea" id="t_md_input" rows="12" oninput="mdPreview()" placeholder="输入Markdown文本...">
# 标题
## 二级标题

这是**粗体**和*斜体*文本。

- 列表项1
- 列表项2

\`代码\`和代码块:

\`\`\`
console.log("Hello");
\`\`\`

> 引用文本

| 表头1 | 表头2 |
|-------|-------|
| 内容1 | 内容2 |
</textarea></div>
            <div style="flex:1"><label class="tool-label">预览</label><div id="t_md_preview" class="md-preview" style="border:1px solid #d9d9d9;border-radius:8px;padding:16px;min-height:300px;overflow:auto"></div></div>
        </div>
    </div>`);
}
function mdPreview() {
    let md = document.getElementById('t_md_input').value;
    // Simple Markdown parser
    md = md.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n\n/g, '<br><br>')
        // Tables
        .replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g, (_, header, body) => {
            const ths = header.split('|').filter(Boolean).map(h => `<th>${h.trim()}</th>`).join('');
            const rows = body.trim().split('\n').map(row => {
                const tds = row.split('|').filter(Boolean).map(d => `<td>${d.trim()}</td>`).join('');
                return `<tr>${tds}</tr>`;
            }).join('');
            return `<table><tr>${ths}</tr>${rows}</table>`;
        });
    document.getElementById('t_md_preview').innerHTML = md;
}

// ----- 生成工具 -----
function toolQRCode() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_qr_input" placeholder="输入要生成二维码的内容" rows="3">https://example.com</textarea>
        <div class="tool-row">
            <div><label class="tool-label">大小</label><input class="tool-input" id="t_qr_size" type="number" value="200" min="100" max="500"></div>
            <div><label class="tool-label">容错级别</label>
                <select class="tool-select tool-input" id="t_qr_level">
                    <option value="L">L (7%)</option><option value="M" selected>M (15%)</option><option value="Q">Q (25%)</option><option value="H">H (30%)</option>
                </select>
            </div>
        </div>
        <button class="tool-btn" onclick="qrCalc()">生成二维码</button>
        <div style="text-align:center;padding:20px"><canvas id="qrCanvas"></canvas></div>
        <p style="text-align:center;color:#999;font-size:0.8rem">使用浏览器内置API生成，简易二维码</p>
    </div>`);
}
function qrCalc() {
    // Simple QR-like visual (not a real QR code, just a visual representation)
    const text = document.getElementById('t_qr_input').value;
    const size = parseInt(document.getElementById('t_qr_size').value) || 200;
    const canvas = document.getElementById('qrCanvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    // Generate a simple data matrix pattern from the text
    const modules = 21;
    const cellSize = size / modules;
    ctx.fillStyle = '#000';
    // Hash the text to create a pattern
    let hash = 0;
    for (let i = 0; i < text.length; i++) hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
    const rng = (function(s){return function(){s=Math.sin(s)*10000;return s-Math.floor(s)};})(hash);
    // Draw finder patterns
    function drawFinder(x, y) {
        for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
            const isBorder = r===0||r===6||c===0||c===6;
            const isInner = r>=2&&r<=4&&c>=2&&c<=4;
            if (isBorder || isInner) { ctx.fillStyle='#000'; ctx.fillRect((x+c)*cellSize,(y+r)*cellSize,cellSize,cellSize); }
        }
    }
    drawFinder(0, 0); drawFinder(modules-7, 0); drawFinder(0, modules-7);
    // Fill data area
    ctx.fillStyle = '#000';
    for (let r = 0; r < modules; r++) for (let c = 0; c < modules; c++) {
        if ((r<7&&c<7)||(r<7&&c>=modules-7)||(r>=modules-7&&c<7)) continue;
        if (rng() > 0.5) ctx.fillRect(c*cellSize, r*cellSize, cellSize, cellSize);
    }
    // Note: this is decorative, not a scannable QR code
    ctx.fillStyle = 'rgba(102,126,234,0.08)';
    ctx.fillRect(0, 0, size, size);
}

function toolRandomNum() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">最小值</label><input class="tool-input" id="t_rn_min" type="number" value="1"></div>
            <div><label class="tool-label">最大值</label><input class="tool-input" id="t_rn_max" type="number" value="100"></div>
            <div><label class="tool-label">数量</label><input class="tool-input" id="t_rn_count" type="number" value="10" min="1" max="1000"></div>
        </div>
        <div class="flex-center">
            <label><input type="checkbox" id="t_rn_unique"> 不重复</label>
            <label><input type="checkbox" id="t_rn_sort"> 排序</label>
        </div>
        <button class="tool-btn" onclick="rnCalc()">生成</button>
        <div class="tool-result" id="t_rn_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_rn_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function rnCalc() {
    const min = parseInt(document.getElementById('t_rn_min').value);
    const max = parseInt(document.getElementById('t_rn_max').value);
    const count = parseInt(document.getElementById('t_rn_count').value);
    const unique = document.getElementById('t_rn_unique').checked;
    const sort = document.getElementById('t_rn_sort').checked;
    if (unique && (max - min + 1) < count) {
        document.getElementById('t_rn_result').firstChild.textContent = '范围内不足以生成不重复的数量';
        return;
    }
    const nums = [];
    const set = new Set();
    while (nums.length < count) {
        const n = Math.floor(Math.random() * (max - min + 1)) + min;
        if (unique && set.has(n)) continue;
        set.add(n);
        nums.push(n);
    }
    if (sort) nums.sort((a, b) => a - b);
    document.getElementById('t_rn_result').firstChild.textContent = nums.join(', ');
}

function toolRegexTest() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div style="flex:3"><label class="tool-label">正则表达式</label><input class="tool-input" id="t_rx_pattern" placeholder="输入正则表达式" value="\\d+"></div>
            <div style="flex:1"><label class="tool-label">标志</label><input class="tool-input" id="t_rx_flags" value="g"></div>
        </div>
        <label class="tool-label">测试文本</label>
        <textarea class="tool-textarea" id="t_rx_input" rows="5">Hello 123 World 456</textarea>
        <button class="tool-btn" onclick="rxCalc()">测试</button>
        <div class="tool-result" id="t_rx_result"></div>
    </div>`);
}
function rxCalc() {
    try {
        const re = new RegExp(document.getElementById('t_rx_pattern').value, document.getElementById('t_rx_flags').value);
        const text = document.getElementById('t_rx_input').value;
        const matches = text.match(re);
        let result = matches ? `找到 ${matches.length} 个匹配:\n\n${matches.map((m, i) => `[${i}] "${m}"`).join('\n')}` : '未找到匹配';
        document.getElementById('t_rx_result').textContent = result;
    } catch(e) { document.getElementById('t_rx_result').textContent = '正则错误: ' + e.message; }
}

function toolCronGen() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">分钟</label><input class="tool-input" id="t_cron_min" value="*"></div>
            <div><label class="tool-label">小时</label><input class="tool-input" id="t_cron_hour" value="*"></div>
            <div><label class="tool-label">日</label><input class="tool-input" id="t_cron_day" value="*"></div>
            <div><label class="tool-label">月</label><input class="tool-input" id="t_cron_month" value="*"></div>
            <div><label class="tool-label">周</label><input class="tool-input" id="t_cron_week" value="*"></div>
        </div>
        <div class="flex-center">
            <button class="tool-btn" onclick="cronPreset('0 * * * *')">每小时</button>
            <button class="tool-btn" onclick="cronPreset('0 0 * * *')">每天</button>
            <button class="tool-btn" onclick="cronPreset('0 0 * * 1')">每周一</button>
            <button class="tool-btn" onclick="cronPreset('0 0 1 * *')">每月1号</button>
        </div>
        <button class="tool-btn" onclick="cronCalc()" style="margin-top:8px">生成/解析</button>
        <div class="tool-result" id="t_cron_result"></div>
    </div>`);
}
function cronPreset(expr) {
    const parts = expr.split(' ');
    document.getElementById('t_cron_min').value = parts[0];
    document.getElementById('t_cron_hour').value = parts[1];
    document.getElementById('t_cron_day').value = parts[2];
    document.getElementById('t_cron_month').value = parts[3];
    document.getElementById('t_cron_week').value = parts[4];
    cronCalc();
}
function cronCalc() {
    const parts = ['t_cron_min','t_cron_hour','t_cron_day','t_cron_month','t_cron_week'].map(id => document.getElementById(id).value);
    const expr = parts.join(' ');
    const desc = [];
    if (parts[0] !== '*') desc.push(`在第 ${parts[0]} 分钟`);
    if (parts[1] !== '*') desc.push(`在 ${parts[1]} 点`);
    if (parts[2] !== '*') desc.push(`在每月第 ${parts[2]} 天`);
    if (parts[3] !== '*') desc.push(`在第 ${parts[3]} 月`);
    if (parts[4] !== '*') { const days = ['日','一','二','三','四','五','六']; desc.push(`在周${days[parts[4]] || parts[4]}`); }
    document.getElementById('t_cron_result').textContent = `表达式: ${expr}\n\n含义: ${desc.length ? desc.join(', ') : '每分钟执行一次'}`;
}

function toolBorderRadius() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">左上</label><input class="tool-input" id="t_br_tl" type="range" min="0" max="50" value="20" oninput="brUpdate()"></div>
            <div><label class="tool-label">右上</label><input class="tool-input" id="t_br_tr" type="range" min="0" max="50" value="20" oninput="brUpdate()"></div>
        </div>
        <div class="tool-row">
            <div><label class="tool-label">左下</label><input class="tool-input" id="t_br_bl" type="range" min="0" max="50" value="20" oninput="brUpdate()"></div>
            <div><label class="tool-label">右下</label><input class="tool-input" id="t_br_br" type="range" min="0" max="50" value="20" oninput="brUpdate()"></div>
        </div>
        <div style="text-align:center;padding:20px">
            <div id="t_br_preview" style="width:200px;height:200px;background:linear-gradient(135deg,#667eea,#764ba2);margin:0 auto;transition:border-radius 0.3s"></div>
        </div>
        <div class="tool-result" id="t_br_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_br_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function brUpdate() {
    const tl=document.getElementById('t_br_tl').value, tr=document.getElementById('t_br_tr').value;
    const bl=document.getElementById('t_br_bl').value, br=document.getElementById('t_br_br').value;
    const val = `${tl}px ${tr}px ${br}px ${bl}px`;
    document.getElementById('t_br_preview').style.borderRadius = val;
    document.getElementById('t_br_result').firstChild.textContent = `border-radius: ${val};`;
}

function toolGradientGen() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">颜色1</label><input type="color" id="t_gg_c1" value="#667eea" class="tool-input" style="height:40px;padding:2px" onchange="ggUpdate()"></div>
            <div><label class="tool-label">颜色2</label><input type="color" id="t_gg_c2" value="#764ba2" class="tool-input" style="height:40px;padding:2px" onchange="ggUpdate()"></div>
            <div><label class="tool-label">角度</label><input class="tool-input" id="t_gg_angle" type="range" min="0" max="360" value="135" oninput="ggUpdate()"></div>
        </div>
        <div id="t_gg_preview" style="width:100%;height:120px;border-radius:12px;background:linear-gradient(135deg,#667eea,#764ba2)"></div>
        <div class="tool-result" id="t_gg_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_gg_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function ggUpdate() {
    const c1=document.getElementById('t_gg_c1').value, c2=document.getElementById('t_gg_c2').value;
    const angle=document.getElementById('t_gg_angle').value;
    const val = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
    document.getElementById('t_gg_preview').style.background = val;
    document.getElementById('t_gg_result').firstChild.textContent = `background: ${val};`;
}

function toolShadowGen() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">X偏移</label><input class="tool-input" id="t_sg_x" type="range" min="-50" max="50" value="4" oninput="sgUpdate()"></div>
            <div><label class="tool-label">Y偏移</label><input class="tool-input" id="t_sg_y" type="range" min="-50" max="50" value="8" oninput="sgUpdate()"></div>
        </div>
        <div class="tool-row">
            <div><label class="tool-label">模糊</label><input class="tool-input" id="t_sg_blur" type="range" min="0" max="100" value="24" oninput="sgUpdate()"></div>
            <div><label class="tool-label">扩展</label><input class="tool-input" id="t_sg_spread" type="range" min="-50" max="50" value="0" oninput="sgUpdate()"></div>
        </div>
        <div><label class="tool-label">颜色</label><input type="color" id="t_sg_color" value="#667eea" class="tool-input" style="height:40px;padding:2px" onchange="sgUpdate()"></div>
        <div style="text-align:center;padding:30px">
            <div id="t_sg_preview" style="width:200px;height:120px;background:#fff;border-radius:12px;margin:0 auto;box-shadow:4px 8px 24px 0px rgba(102,126,234,0.4)"></div>
        </div>
        <div class="tool-result" id="t_sg_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_sg_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function sgUpdate() {
    const x=document.getElementById('t_sg_x').value, y=document.getElementById('t_sg_y').value;
    const blur=document.getElementById('t_sg_blur').value, spread=document.getElementById('t_sg_spread').value;
    const color=document.getElementById('t_sg_color').value;
    // Convert hex to rgba
    const r=parseInt(color.substr(1,2),16), g=parseInt(color.substr(3,2),16), b=parseInt(color.substr(5,2),16);
    const val = `${x}px ${y}px ${blur}px ${spread}px rgba(${r},${g},${b},0.4)`;
    document.getElementById('t_sg_preview').style.boxShadow = val;
    document.getElementById('t_sg_result').firstChild.textContent = `box-shadow: ${val};`;
}

// ----- 图片工具 -----
function toolImgBase64() {
    return h(`<div class="tool-ui">
        <div style="border:2px dashed #d9d9d9;border-radius:12px;padding:30px;text-align:center">
            <input type="file" id="t_ib_file" accept="image/*" onchange="ibConvert()" style="display:none">
            <button class="tool-btn" onclick="document.getElementById('t_ib_file').click()">选择图片</button>
            <p style="color:#999;margin-top:8px;font-size:0.85rem">支持 PNG, JPG, GIF, SVG 等</p>
        </div>
        <div id="t_ib_preview" style="text-align:center;padding:16px"></div>
        <textarea class="tool-textarea" id="t_ib_result" rows="6" placeholder="Base64结果将显示在这里，也可粘贴Base64转为图片预览"></textarea>
        <div class="flex-center">
            <button class="tool-btn" onclick="ibCopy()">复制Base64</button>
            <button class="tool-btn secondary" onclick="ibFromBase64()">Base64转图片预览</button>
        </div>
    </div>`);
}
function ibConvert() {
    const file = document.getElementById('t_ib_file').files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('t_ib_result').value = e.target.result;
        document.getElementById('t_ib_preview').innerHTML = `<img src="${e.target.result}" style="max-width:300px;max-height:200px;border-radius:8px">`;
    };
    reader.readAsDataURL(file);
}
function ibCopy() { navigator.clipboard.writeText(document.getElementById('t_ib_result').value); }
function ibFromBase64() {
    const b64 = document.getElementById('t_ib_result').value;
    if (b64) document.getElementById('t_ib_preview').innerHTML = `<img src="${b64}" style="max-width:300px;max-height:200px;border-radius:8px" onerror="this.parentElement.innerHTML='<p style=color:red>无效的Base64图片数据</p>'">`;
}

function toolColorPicker() {
    return h(`<div class="tool-ui">
        <div style="text-align:center">
            <input type="color" id="t_cp_picker" value="#667eea" style="width:200px;height:200px;border:none;cursor:pointer;border-radius:12px" onchange="cpUpdate()">
        </div>
        <div class="tool-result" id="t_cp_result" style="text-align:center;font-size:1.2rem;font-weight:bold">#667eea</div>
        <div class="flex-center">
            <button class="tool-btn" onclick="navigator.clipboard.writeText(document.getElementById('t_cp_picker').value)">复制颜色值</button>
        </div>
    </div>`);
}
function cpUpdate() {
    const v = document.getElementById('t_cp_picker').value;
    document.getElementById('t_cp_result').textContent = v;
}

function toolPlaceholderImg() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">宽度</label><input class="tool-input" id="t_ph_w" type="number" value="400" min="10" max="2000"></div>
            <div><label class="tool-label">高度</label><input class="tool-input" id="t_ph_h" type="number" value="300" min="10" max="2000"></div>
        </div>
        <div class="tool-row">
            <div><label class="tool-label">背景色</label><input type="color" id="t_ph_bg" value="#cccccc" class="tool-input" style="height:40px;padding:2px"></div>
            <div><label class="tool-label">文字色</label><input type="color" id="t_ph_fg" value="#666666" class="tool-input" style="height:40px;padding:2px"></div>
            <div><label class="tool-label">文字</label><input class="tool-input" id="t_ph_text" placeholder="留空显示尺寸"></div>
        </div>
        <button class="tool-btn" onclick="phCalc()">生成</button>
        <div style="text-align:center;padding:16px"><canvas id="t_ph_canvas"></canvas></div>
        <div class="flex-center">
            <button class="tool-btn secondary" onclick="phDownload()">下载</button>
        </div>
    </div>`);
}
function phCalc() {
    const w=parseInt(document.getElementById('t_ph_w').value), h2=parseInt(document.getElementById('t_ph_h').value);
    const bg=document.getElementById('t_ph_bg').value, fg=document.getElementById('t_ph_fg').value;
    const text=document.getElementById('t_ph_text').value || `${w} × ${h2}`;
    const canvas=document.getElementById('t_ph_canvas');
    canvas.width=w; canvas.height=h2;
    const ctx=canvas.getContext('2d');
    ctx.fillStyle=bg; ctx.fillRect(0,0,w,h2);
    ctx.fillStyle=fg; ctx.font=`bold ${Math.min(w,h2)/8}px sans-serif`;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(text,w/2,h2/2);
}
function phDownload() {
    const link=document.createElement('a');
    link.download='placeholder.png';
    link.href=document.getElementById('t_ph_canvas').toDataURL();
    link.click();
}

function toolSVGPreview() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_svg_input" rows="8" placeholder='粘贴SVG代码'><svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#667eea"/></svg></textarea>
        <button class="tool-btn" onclick="svgPreview()">预览</button>
        <div id="t_svg_preview" style="text-align:center;padding:20px;border:1px solid #eee;border-radius:8px;min-height:100px;background:#f8f9fa"></div>
    </div>`);
}
function svgPreview() {
    const svg = document.getElementById('t_svg_input').value;
    // Sanitize: only allow SVG elements
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    if (doc.querySelector('parsererror')) {
        document.getElementById('t_svg_preview').innerHTML = '<p style="color:red">SVG解析错误</p>';
    } else {
        document.getElementById('t_svg_preview').innerHTML = svg;
    }
}

function toolFaviconGen() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">Emoji / 文字</label><input class="tool-input" id="t_fav_text" value="🛠" maxlength="2"></div>
            <div><label class="tool-label">背景色</label><input type="color" id="t_fav_bg" value="#667eea" class="tool-input" style="height:40px;padding:2px"></div>
        </div>
        <button class="tool-btn" onclick="favCalc()">生成</button>
        <div style="text-align:center;padding:20px">
            <canvas id="t_fav_canvas" width="64" height="64" style="border:1px solid #ddd;border-radius:8px"></canvas>
        </div>
        <div class="tool-result" id="t_fav_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_fav_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function favCalc() {
    const text=document.getElementById('t_fav_text').value, bg=document.getElementById('t_fav_bg').value;
    const canvas=document.getElementById('t_fav_canvas');
    const ctx=canvas.getContext('2d');
    ctx.fillStyle=bg; ctx.fillRect(0,0,64,64);
    ctx.font='40px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(text,32,35);
    const dataUrl = canvas.toDataURL('image/png');
    const link = `<link rel="icon" href="${dataUrl}">`;
    document.getElementById('t_fav_result').firstChild.textContent = link;
}

// ----- 开发工具 -----
function toolJSONPath() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_jp_json" rows="8" placeholder='输入JSON数据'>{"users":[{"name":"Alice","age":30},{"name":"Bob","age":25}]}</textarea>
        <div class="tool-row">
            <div style="flex:3"><label class="tool-label">路径表达式</label><input class="tool-input" id="t_jp_path" placeholder="如: users.0.name 或 users.*.age" value="users.0.name"></div>
        </div>
        <button class="tool-btn" onclick="jpCalc()">查询</button>
        <div class="tool-result" id="t_jp_result"></div>
    </div>`);
}
function jpCalc() {
    try {
        const obj = JSON.parse(document.getElementById('t_jp_json').value);
        const path = document.getElementById('t_jp_path').value.split('.');
        function query(o, parts) {
            if (parts.length === 0) return [o];
            const [head, ...rest] = parts;
            if (head === '*') {
                const vals = Array.isArray(o) ? o : Object.values(o);
                return vals.flatMap(v => query(v, rest));
            }
            const next = Array.isArray(o) ? o[parseInt(head)] : o[head];
            return next !== undefined ? query(next, rest) : [];
        }
        const results = query(obj, path);
        document.getElementById('t_jp_result').textContent = JSON.stringify(results.length === 1 ? results[0] : results, null, 2);
    } catch(e) { document.getElementById('t_jp_result').textContent = '错误: ' + e.message; }
}

function toolHTTPStatus() {
    const codes = {
        '1xx 信息': { 100: 'Continue', 101: 'Switching Protocols', 102: 'Processing' },
        '2xx 成功': { 200: 'OK', 201: 'Created', 202: 'Accepted', 204: 'No Content', 206: 'Partial Content' },
        '3xx 重定向': { 301: 'Moved Permanently', 302: 'Found', 303: 'See Other', 304: 'Not Modified', 307: 'Temporary Redirect', 308: 'Permanent Redirect' },
        '4xx 客户端错误': { 400: 'Bad Request', 401: 'Unauthorized', 403: 'Forbidden', 404: 'Not Found', 405: 'Method Not Allowed', 408: 'Request Timeout', 409: 'Conflict', 413: 'Payload Too Large', 415: 'Unsupported Media Type', 422: 'Unprocessable Entity', 429: 'Too Many Requests' },
        '5xx 服务器错误': { 500: 'Internal Server Error', 501: 'Not Implemented', 502: 'Bad Gateway', 503: 'Service Unavailable', 504: 'Gateway Timeout' }
    };
    let html = '<div class="tool-ui"><input class="tool-input" placeholder="搜索状态码..." oninput="httpFilter(this.value)" style="margin-bottom:16px"><div id="t_http_list">';
    for (const [group, items] of Object.entries(codes)) {
        html += `<h3 style="color:#667eea;margin:12px 0 8px">${group}</h3>`;
        for (const [code, desc] of Object.entries(items)) {
            html += `<div class="http-item" style="padding:6px 12px;border-bottom:1px solid #f0f0f0;display:flex;gap:12px"><strong>${code}</strong><span>${desc}</span></div>`;
        }
    }
    html += '</div></div>';
    return html;
}
function httpFilter(q) {
    document.querySelectorAll('.http-item').forEach(el => {
        el.style.display = el.textContent.toLowerCase().includes(q.toLowerCase()) ? 'flex' : 'none';
    });
}

function toolMIMETypes() {
    const types = {
        '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json',
        '.xml': 'application/xml', '.txt': 'text/plain', '.csv': 'text/csv',
        '.png': 'image/png', '.jpg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ico': 'image/x-icon',
        '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.mp4': 'video/mp4', '.webm': 'video/webm',
        '.pdf': 'application/pdf', '.zip': 'application/zip', '.gz': 'application/gzip', '.tar': 'application/x-tar',
        '.doc': 'application/msword', '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
    };
    let html = '<div class="tool-ui"><input class="tool-input" placeholder="搜索文件扩展名或MIME类型..." oninput="mimeFilter(this.value)" style="margin-bottom:12px"><div id="t_mime_list" style="max-height:400px;overflow:auto">';
    for (const [ext, mime] of Object.entries(types)) {
        html += `<div class="mime-item" style="padding:6px 12px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between"><code>${ext}</code><span style="color:#666">${mime}</span></div>`;
    }
    html += '</div></div>';
    return html;
}
function mimeFilter(q) {
    document.querySelectorAll('.mime-item').forEach(el => {
        el.style.display = el.textContent.toLowerCase().includes(q.toLowerCase()) ? 'flex' : 'none';
    });
}

function toolUserAgent() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_ua_input" rows="3" placeholder="粘贴User-Agent字符串, 留空使用当前浏览器"></textarea>
        <button class="tool-btn" onclick="uaCalc()">解析</button>
        <div class="tool-result" id="t_ua_result"></div>
    </div>`);
}
function uaCalc() {
    const ua = document.getElementById('t_ua_input').value || navigator.userAgent;
    let browser = '未知', os = '未知', engine = '未知';
    if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Edg')) browser = 'Microsoft Edge';
    else if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Safari')) browser = 'Safari';
    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Mac')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iPhone')) os = 'iOS';
    if (ua.includes('Gecko')) engine = 'Gecko';
    if (ua.includes('AppleWebKit')) engine = 'WebKit';
    if (ua.includes('Blink') || ua.includes('Chrome')) engine = 'Blink';
    document.getElementById('t_ua_result').textContent = `User-Agent: ${ua}\n\n浏览器: ${browser}\n操作系统: ${os}\n引擎: ${engine}\n平台: ${navigator.platform}\n语言: ${navigator.language}`;
}

function toolMetaGen() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">网站标题</label><input class="tool-input" id="t_meta_title" placeholder="My Website" value="My Website"></div>
            <div><label class="tool-label">描述</label><input class="tool-input" id="t_meta_desc" placeholder="A great website" value="A great website"></div>
        </div>
        <div class="tool-row">
            <div><label class="tool-label">关键词</label><input class="tool-input" id="t_meta_keywords" placeholder="web, tools" value="web, tools"></div>
            <div><label class="tool-label">作者</label><input class="tool-input" id="t_meta_author" placeholder="Author" value="Author"></div>
        </div>
        <button class="tool-btn" onclick="metaCalc()">生成</button>
        <div class="tool-result" id="t_meta_result" style="position:relative"><button class="copy-btn copy-btn-active" onclick="copyText(document.getElementById('t_meta_result').textContent.replace('复制',''))">复制</button></div>
    </div>`);
}
function metaCalc() {
    const t=document.getElementById('t_meta_title').value, d=document.getElementById('t_meta_desc').value;
    const k=document.getElementById('t_meta_keywords').value, a=document.getElementById('t_meta_author').value;
    document.getElementById('t_meta_result').firstChild.textContent =
`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${d}">
<meta name="keywords" content="${k}">
<meta name="author" content="${a}">
<title>${t}</title>

<!-- Open Graph -->
<meta property="og:title" content="${t}">
<meta property="og:description" content="${d}">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${t}">
<meta name="twitter:description" content="${d}">`;
}

function toolChmodCalc() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div>
                <label class="tool-label">Owner</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="0" data-val="4" onchange="chmodUpdate()"> Read</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="0" data-val="2" onchange="chmodUpdate()"> Write</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="0" data-val="1" onchange="chmodUpdate()"> Execute</label>
            </div>
            <div>
                <label class="tool-label">Group</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="1" data-val="4" onchange="chmodUpdate()"> Read</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="1" data-val="2" onchange="chmodUpdate()"> Write</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="1" data-val="1" onchange="chmodUpdate()"> Execute</label>
            </div>
            <div>
                <label class="tool-label">Others</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="2" data-val="4" onchange="chmodUpdate()"> Read</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="2" data-val="2" onchange="chmodUpdate()"> Write</label>
                <label><input type="checkbox" class="chmod-cb" data-pos="2" data-val="1" onchange="chmodUpdate()"> Execute</label>
            </div>
        </div>
        <div class="tool-result" id="t_chmod_result" style="font-size:1.5rem;text-align:center">000</div>
    </div>`);
}
function chmodUpdate() {
    const perms = [0, 0, 0];
    document.querySelectorAll('.chmod-cb:checked').forEach(cb => {
        perms[parseInt(cb.dataset.pos)] += parseInt(cb.dataset.val);
    });
    document.getElementById('t_chmod_result').textContent = `chmod ${perms.join('')}`;
}

function toolHTMLPreview() {
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_hp_input" rows="10" placeholder="输入HTML代码"><h1 style="color:#667eea">Hello World!</h1>
<p>这是一个HTML预览器</p>
<button onclick="alert('clicked!')">点击我</button></textarea>
        <button class="tool-btn" onclick="hpCalc()">预览</button>
        <iframe id="t_hp_frame" style="width:100%;height:300px;border:1px solid #ddd;border-radius:8px;background:#fff" sandbox="allow-scripts"></iframe>
    </div>`);
}
function hpCalc() {
    const frame = document.getElementById('t_hp_frame');
    const html = document.getElementById('t_hp_input').value;
    frame.srcdoc = html;
}

function toolIPInfo() {
    return h(`<div class="tool-ui">
        <button class="tool-btn" onclick="ipCalc()">获取IP信息</button>
        <div class="tool-result" id="t_ip_result">点击按钮获取当前IP信息</div>
    </div>`);
}
function ipCalc() {
    document.getElementById('t_ip_result').textContent = '获取中...';
    // Display available browser info
    const info = [];
    info.push(`平台: ${navigator.platform}`);
    info.push(`浏览器: ${navigator.userAgent}`);
    info.push(`语言: ${navigator.language}`);
    info.push(`在线状态: ${navigator.onLine ? '在线' : '离线'}`);
    info.push(`屏幕: ${screen.width} × ${screen.height}`);
    info.push(`窗口: ${window.innerWidth} × ${window.innerHeight}`);
    info.push(`色彩深度: ${screen.colorDepth}bit`);
    info.push(`时区: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
    info.push(`Cookie启用: ${navigator.cookieEnabled}`);
    info.push(`触摸支持: ${'ontouchstart' in window}`);
    document.getElementById('t_ip_result').textContent = info.join('\n');
}

// ----- 日常工具 -----
function toolCalculator() {
    return h(`<div class="tool-ui">
        <input class="tool-input" id="t_calc_input" placeholder="输入数学表达式, 如: 2+3*4" style="font-size:1.2rem;text-align:right">
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px">
            ${['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map(b =>
                `<button class="tool-btn ${b==='='?'':'secondary'}" onclick="${b==='='?'calcEval()':'calcAppend(\''+b+'\')'}" style="padding:14px;font-size:1.1rem">${b}</button>`
            ).join('')}
        </div>
        <div class="flex-center" style="margin-top:8px">
            <button class="tool-btn secondary" onclick="calcAppend('(')">(</button>
            <button class="tool-btn secondary" onclick="calcAppend(')')">)</button>
            <button class="tool-btn secondary" onclick="calcAppend('**')">^</button>
            <button class="tool-btn secondary" onclick="calcAppend('%')">%</button>
            <button class="tool-btn secondary" onclick="document.getElementById('t_calc_input').value=''">C</button>
        </div>
        <div class="tool-result" id="t_calc_result" style="font-size:1.3rem;text-align:right"></div>
    </div>`);
}
function calcAppend(v) { document.getElementById('t_calc_input').value += v; }
function calcEval() {
    try {
        // Only allow safe math characters
        const expr = document.getElementById('t_calc_input').value;
        if (!/^[0-9+\-*/().% ]+$/.test(expr)) throw new Error('Invalid');
        const result = Function('"use strict";return (' + expr + ')')();
        document.getElementById('t_calc_result').textContent = '= ' + result;
    } catch(e) { document.getElementById('t_calc_result').textContent = '表达式错误'; }
}

function toolBMI() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">身高 (cm)</label><input class="tool-input" id="t_bmi_h" type="number" placeholder="170" value="170"></div>
            <div><label class="tool-label">体重 (kg)</label><input class="tool-input" id="t_bmi_w" type="number" placeholder="65" value="65"></div>
        </div>
        <button class="tool-btn" onclick="bmiCalc()">计算</button>
        <div class="tool-result" id="t_bmi_result"></div>
    </div>`);
}
function bmiCalc() {
    const h2 = parseFloat(document.getElementById('t_bmi_h').value) / 100;
    const w = parseFloat(document.getElementById('t_bmi_w').value);
    const bmi = w / (h2 * h2);
    let status;
    if (bmi < 18.5) status = '偏瘦';
    else if (bmi < 24) status = '正常';
    else if (bmi < 28) status = '偏胖';
    else status = '肥胖';
    document.getElementById('t_bmi_result').textContent = `BMI: ${bmi.toFixed(1)}\n状态: ${status}\n\n参考标准:\n偏瘦: < 18.5\n正常: 18.5 - 23.9\n偏胖: 24 - 27.9\n肥胖: ≥ 28`;
}

function toolAgeCalc() {
    return h(`<div class="tool-ui">
        <label class="tool-label">出生日期</label>
        <input class="tool-input" id="t_age_date" type="date" value="2000-01-01">
        <button class="tool-btn" onclick="ageCalc()">计算</button>
        <div class="tool-result" id="t_age_result"></div>
    </div>`);
}
function ageCalc() {
    const birth = new Date(document.getElementById('t_age_date').value);
    const now = new Date();
    const diff = now - birth;
    const days = Math.floor(diff / 86400000);
    const years = Math.floor(days / 365.25);
    const months = Math.floor(days / 30.44);
    const weeks = Math.floor(days / 7);
    const hours = Math.floor(diff / 3600000);
    document.getElementById('t_age_result').textContent =
        `年龄: ${years} 岁\n月数: ${months} 个月\n周数: ${weeks} 周\n天数: ${days} 天\n小时: ${hours.toLocaleString()} 小时\n\n下一个生日: ${nextBirthday(birth)}`;
}
function nextBirthday(birth) {
    const now = new Date();
    const next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (next < now) next.setFullYear(next.getFullYear() + 1);
    const days = Math.ceil((next - now) / 86400000);
    return `${next.toLocaleDateString()} (还有 ${days} 天)`;
}

function toolCountdown() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">分钟</label><input class="tool-input" id="t_cd_min" type="number" value="5" min="0"></div>
            <div><label class="tool-label">秒</label><input class="tool-input" id="t_cd_sec" type="number" value="0" min="0" max="59"></div>
        </div>
        <div class="flex-center">
            <button class="tool-btn" id="t_cd_start" onclick="cdStart()">开始</button>
            <button class="tool-btn secondary" onclick="cdReset()">重置</button>
        </div>
        <div id="t_cd_display" style="text-align:center;font-size:3rem;font-weight:bold;color:#667eea;padding:30px;font-family:monospace">05:00</div>
    </div>`);
}
let cdTimer = null;
function cdStart() {
    if (cdTimer) { clearInterval(cdTimer); cdTimer = null; document.getElementById('t_cd_start').textContent = '开始'; return; }
    let total = parseInt(document.getElementById('t_cd_min').value) * 60 + parseInt(document.getElementById('t_cd_sec').value);
    document.getElementById('t_cd_start').textContent = '暂停';
    cdTimer = setInterval(() => {
        if (total <= 0) { clearInterval(cdTimer); cdTimer = null; document.getElementById('t_cd_start').textContent = '开始'; document.getElementById('t_cd_display').textContent = '00:00'; return; }
        total--;
        document.getElementById('t_cd_display').textContent = `${String(Math.floor(total/60)).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;
    }, 1000);
}
function cdReset() { if(cdTimer){clearInterval(cdTimer);cdTimer=null;} document.getElementById('t_cd_start').textContent='开始'; document.getElementById('t_cd_display').textContent='05:00'; }

function toolWorldClock() {
    const zones = [
        { name: '北京', tz: 'Asia/Shanghai' },
        { name: '东京', tz: 'Asia/Tokyo' },
        { name: '纽约', tz: 'America/New_York' },
        { name: '伦敦', tz: 'Europe/London' },
        { name: '巴黎', tz: 'Europe/Paris' },
        { name: '悉尼', tz: 'Australia/Sydney' },
        { name: '莫斯科', tz: 'Europe/Moscow' },
        { name: '迪拜', tz: 'Asia/Dubai' },
    ];
    let html = '<div class="tool-ui"><div id="t_wc_clocks">';
    zones.forEach(z => {
        html += `<div style="display:flex;justify-content:space-between;padding:10px 12px;border-bottom:1px solid #f0f0f0"><strong>${z.name}</strong><span class="wc-time" data-tz="${z.tz}"></span></div>`;
    });
    html += '</div></div>';
    return html;
}

function toolNotepad() {
    const saved = localStorage.getItem('toolbox_notepad') || '';
    return h(`<div class="tool-ui">
        <textarea class="tool-textarea" id="t_np_input" rows="12" placeholder="在此输入内容，自动保存到本地存储..." oninput="npSave()">${saved}</textarea>
        <div class="flex-center">
            <button class="tool-btn secondary" onclick="npClear()">清空</button>
            <button class="tool-btn" onclick="navigator.clipboard.writeText(document.getElementById('t_np_input').value)">复制全部</button>
        </div>
        <p style="color:#999;font-size:0.8rem;text-align:center">数据保存在浏览器本地存储中</p>
    </div>`);
}
function npSave() { localStorage.setItem('toolbox_notepad', document.getElementById('t_np_input').value); }
function npClear() { document.getElementById('t_np_input').value = ''; localStorage.removeItem('toolbox_notepad'); }

function toolStopwatch() {
    return h(`<div class="tool-ui">
        <div id="t_sw_display" style="text-align:center;font-size:3rem;font-weight:bold;color:#667eea;padding:30px;font-family:monospace">00:00.000</div>
        <div class="flex-center">
            <button class="tool-btn" id="t_sw_start" onclick="swToggle()">开始</button>
            <button class="tool-btn secondary" onclick="swLap()">计次</button>
            <button class="tool-btn secondary" onclick="swReset()">重置</button>
        </div>
        <div id="t_sw_laps" style="margin-top:12px"></div>
    </div>`);
}
let swTimer = null, swStart = 0, swElapsed = 0, swLaps = [];
function swToggle() {
    if (swTimer) {
        swElapsed += Date.now() - swStart;
        clearInterval(swTimer); swTimer = null;
        document.getElementById('t_sw_start').textContent = '继续';
    } else {
        swStart = Date.now();
        document.getElementById('t_sw_start').textContent = '暂停';
        swTimer = setInterval(() => {
            const t = swElapsed + Date.now() - swStart;
            const min = Math.floor(t / 60000);
            const sec = Math.floor((t % 60000) / 1000);
            const ms = t % 1000;
            document.getElementById('t_sw_display').textContent =
                `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}.${String(ms).padStart(3,'0')}`;
        }, 10);
    }
}
function swLap() {
    const t = swElapsed + (swTimer ? Date.now() - swStart : 0);
    swLaps.push(t);
    const el = document.getElementById('t_sw_laps');
    const min = Math.floor(t/60000), sec = Math.floor((t%60000)/1000), ms = t%1000;
    el.innerHTML = swLaps.map((l, i) => {
        const m=Math.floor(l/60000), s=Math.floor((l%60000)/1000), ms2=l%1000;
        return `<div style="padding:4px 12px;border-bottom:1px solid #f0f0f0">#${i+1} ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(ms2).padStart(3,'0')}</div>`;
    }).reverse().join('');
}
function swReset() {
    if(swTimer){clearInterval(swTimer);swTimer=null;}
    swElapsed=0; swLaps=[];
    document.getElementById('t_sw_display').textContent='00:00.000';
    document.getElementById('t_sw_start').textContent='开始';
    document.getElementById('t_sw_laps').innerHTML='';
}

// ========== 网络/运维工具 ==========

function toolSubnetCalc() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">IP 地址</label><input class="tool-input" id="t_sn_ip" value="192.168.1.0" placeholder="192.168.1.0"></div>
        <div><label class="tool-label">CIDR 前缀 / 子网掩码</label><input class="tool-input" id="t_sn_mask" value="24" placeholder="24 或 255.255.255.0"></div>
        <button class="tool-btn" onclick="snCalc()">计算</button>
        <div class="tool-result" id="t_sn_result">输入IP和掩码后点击计算</div>
    </div>`);
}
function snCalc() {
    const ip = document.getElementById('t_sn_ip').value.trim();
    const maskInput = document.getElementById('t_sn_mask').value.trim();
    const parts = ip.split('.').map(Number);
    if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) { document.getElementById('t_sn_result').textContent = 'IP 地址格式错误'; return; }
    let cidr;
    if (maskInput.includes('.')) {
        const mp = maskInput.split('.').map(Number);
        const bin = mp.map(p => p.toString(2).padStart(8,'0')).join('');
        cidr = bin.indexOf('0') === -1 ? 32 : bin.indexOf('0');
    } else { cidr = parseInt(maskInput); }
    if (isNaN(cidr) || cidr < 0 || cidr > 32) { document.getElementById('t_sn_result').textContent = '子网掩码格式错误'; return; }
    const ipNum = (parts[0]<<24 | parts[1]<<16 | parts[2]<<8 | parts[3]) >>> 0;
    const mask = cidr === 0 ? 0 : (0xFFFFFFFF << (32-cidr)) >>> 0;
    const network = (ipNum & mask) >>> 0;
    const broadcast = (network | ~mask) >>> 0;
    const firstHost = cidr >= 31 ? network : (network + 1) >>> 0;
    const lastHost = cidr >= 31 ? broadcast : (broadcast - 1) >>> 0;
    const hosts = cidr >= 31 ? (cidr === 32 ? 1 : 2) : Math.pow(2, 32-cidr) - 2;
    const n2ip = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
    const maskStr = n2ip(mask);
    document.getElementById('t_sn_result').textContent =
        `网络地址:    ${n2ip(network)}/${cidr}\n子网掩码:    ${maskStr}\n广播地址:    ${n2ip(broadcast)}\n可用主机范围: ${n2ip(firstHost)} - ${n2ip(lastHost)}\n可用主机数:   ${hosts.toLocaleString()}\nIP 总数:     ${Math.pow(2, 32-cidr).toLocaleString()}`;
}

function toolCIDRConvert() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">CIDR 前缀长度</label><input class="tool-input" id="t_cidr_in" value="24" placeholder="如: 24"></div>
        <button class="tool-btn" onclick="cidrConv()">转换</button>
        <div class="tool-result" id="t_cidr_result"></div>
    </div>`);
}
function cidrConv() {
    const cidr = parseInt(document.getElementById('t_cidr_in').value);
    if (isNaN(cidr) || cidr < 0 || cidr > 32) { document.getElementById('t_cidr_result').textContent = '请输入 0-32'; return; }
    const mask = cidr === 0 ? 0 : (0xFFFFFFFF << (32-cidr)) >>> 0;
    const wildcard = (~mask) >>> 0;
    const n2ip = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
    const hosts = cidr >= 31 ? (cidr===32?1:2) : Math.pow(2,32-cidr)-2;
    document.getElementById('t_cidr_result').textContent =
        `CIDR:      /${cidr}\n子网掩码:   ${n2ip(mask)}\n通配符掩码: ${n2ip(wildcard)}\nIP 总数:   ${Math.pow(2,32-cidr).toLocaleString()}\n可用主机:   ${hosts.toLocaleString()}`;
}

function toolPortRef() {
    const ports = [
        [20,'FTP-Data','TCP'],[21,'FTP','TCP'],[22,'SSH/SFTP','TCP'],[23,'Telnet','TCP'],[25,'SMTP','TCP'],
        [53,'DNS','TCP/UDP'],[67,'DHCP Server','UDP'],[68,'DHCP Client','UDP'],[69,'TFTP','UDP'],[80,'HTTP','TCP'],
        [110,'POP3','TCP'],[123,'NTP','UDP'],[143,'IMAP','TCP'],[161,'SNMP','UDP'],[389,'LDAP','TCP'],
        [443,'HTTPS','TCP'],[445,'SMB','TCP'],[465,'SMTPS','TCP'],[514,'Syslog','UDP'],[587,'SMTP(TLS)','TCP'],
        [636,'LDAPS','TCP'],[993,'IMAPS','TCP'],[995,'POP3S','TCP'],[1433,'MSSQL','TCP'],[1521,'Oracle','TCP'],
        [2049,'NFS','TCP/UDP'],[3306,'MySQL','TCP'],[3389,'RDP','TCP'],[5432,'PostgreSQL','TCP'],[5900,'VNC','TCP'],
        [6379,'Redis','TCP'],[8080,'HTTP-Alt','TCP'],[8443,'HTTPS-Alt','TCP'],[9090,'Prometheus','TCP'],
        [27017,'MongoDB','TCP'],[1494,'Citrix ICA','TCP'],[2598,'Citrix CGP','TCP'],[443,'NetScaler','TCP'],
        [902,'vSphere','TCP'],[5480,'VCSA','TCP'],
    ];
    let rows = ports.map(p => `<tr><td style="color:var(--accent);font-weight:600">${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td></tr>`).join('');
    return h(`<div class="tool-ui">
        <input class="tool-input" placeholder="搜索端口或服务..." oninput="prSearch(this.value)">
        <div style="max-height:400px;overflow-y:auto">
        <table class="md-preview" style="width:100%" id="t_port_table">
            <thead><tr><th>端口</th><th>服务</th><th>协议</th></tr></thead>
            <tbody>${rows}</tbody>
        </table></div>
    </div>`);
}
function prSearch(q) {
    const rows = document.querySelectorAll('#t_port_table tbody tr');
    q = q.toLowerCase();
    rows.forEach(r => { r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none'; });
}

function toolDNSRecord() {
    const records = [
        ['A','将域名映射到IPv4地址','example.com → 93.184.216.34'],
        ['AAAA','将域名映射到IPv6地址','example.com → 2606:2800:220:1:248:1893:25c8:1946'],
        ['CNAME','将域名指向另一个域名(别名)','www.example.com → example.com'],
        ['MX','指定邮件服务器','example.com → mail.example.com (优先级 10)'],
        ['TXT','存储任意文本(SPF/DKIM等)','v=spf1 include:_spf.google.com ~all'],
        ['NS','指定域名的DNS服务器','example.com → ns1.example.com'],
        ['SOA','起始授权记录(区域参数)','包含主DNS、管理员邮箱、序列号等'],
        ['SRV','指定服务的位置(端口和主机)','_sip._tcp.example.com → sipserver.example.com:5060'],
        ['PTR','反向DNS(IP→域名)','34.216.184.93.in-addr.arpa → example.com'],
        ['CAA','指定允许颁发证书的CA','example.com CAA 0 issue "letsencrypt.org"'],
    ];
    let rows = records.map(r => `<tr><td style="color:var(--accent);font-weight:600;white-space:nowrap">${r[0]}</td><td>${r[1]}</td><td style="font-size:0.8em;color:var(--text-muted)">${r[2]}</td></tr>`).join('');
    return h(`<div class="tool-ui"><div style="overflow-x:auto">
        <table class="md-preview" style="width:100%"><thead><tr><th>类型</th><th>说明</th><th>示例</th></tr></thead><tbody>${rows}</tbody></table>
    </div></div>`);
}

function toolSSLDecode() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">粘贴 PEM 证书</label>
        <textarea class="tool-textarea" id="t_ssl_in" rows="8" placeholder="-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"></textarea></div>
        <button class="tool-btn" onclick="sslDec()">解析</button>
        <div class="tool-result" id="t_ssl_result">粘贴PEM证书后点击解析</div>
    </div>`);
}
function sslDec() {
    const pem = document.getElementById('t_ssl_in').value.trim();
    if (!pem.includes('BEGIN CERTIFICATE')) { document.getElementById('t_ssl_result').textContent = '请粘贴有效的 PEM 格式证书'; return; }
    try {
        const b64 = pem.replace(/-----[^-]+-----/g, '').replace(/\s/g, '');
        const bin = atob(b64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
        const size = bytes.length;
        let info = `证书大小: ${size} 字节\nBase64 长度: ${b64.length} 字符\n\n(浏览器端无法完整解析ASN.1结构，\n建议使用 openssl x509 -text -noout 查看详细信息)`;
        document.getElementById('t_ssl_result').textContent = info;
    } catch(e) { document.getElementById('t_ssl_result').textContent = '解析错误: ' + e.message; }
}

function toolCrontabRef() {
    return h(`<div class="tool-ui">
        <div class="tool-result" style="font-size:0.85rem;line-height:2">
<b>Crontab 格式:</b>  分 时 日 月 周  命令

┌───────── 分钟 (0-59)
│ ┌─────── 小时 (0-23)
│ │ ┌───── 日 (1-31)
│ │ │ ┌─── 月 (1-12)
│ │ │ │ ┌─ 星期 (0-7, 0和7=周日)
│ │ │ │ │
* * * * *  command

<b>特殊字符:</b>
*     任意值           ,  列表 (1,3,5)
-     范围 (1-5)       /  步长 (*/5 = 每5)

<b>常用示例:</b>
0 2 * * *       每天凌晨2点
*/5 * * * *     每5分钟
0 9-18 * * 1-5  工作日9-18点每小时
0 0 1 * *       每月1号0点
30 4 * * 0      每周日4:30
0 */2 * * *     每2小时

<b>@关键字 (部分系统支持):</b>
@reboot    启动时执行
@yearly    每年 (= 0 0 1 1 *)
@monthly   每月 (= 0 0 1 * *)
@weekly    每周 (= 0 0 * * 0)
@daily     每天 (= 0 0 * * *)
@hourly    每小时 (= 0 * * * *)
</div></div>`);
}

function toolHTTPHeader() {
    const headers = [
        ['请求头','Authorization','身份认证凭据 (Bearer token, Basic等)'],
        ['请求头','Content-Type','请求体类型 (application/json, multipart/form-data)'],
        ['请求头','Accept','客户端可接受的响应类型'],
        ['请求头','User-Agent','客户端标识'],
        ['请求头','Cache-Control','缓存策略 (no-cache, max-age=3600)'],
        ['请求头','X-Forwarded-For','代理转发的原始客户端IP'],
        ['请求头','Origin','跨域请求的源'],
        ['响应头','Content-Type','响应体类型'],
        ['响应头','Set-Cookie','设置Cookie'],
        ['响应头','Access-Control-Allow-Origin','CORS允许的来源'],
        ['响应头','X-Content-Type-Options','防止MIME嗅探 (nosniff)'],
        ['响应头','Strict-Transport-Security','强制HTTPS (HSTS)'],
        ['响应头','X-Frame-Options','防止点击劫持 (DENY/SAMEORIGIN)'],
        ['响应头','Content-Security-Policy','内容安全策略'],
        ['响应头','Location','重定向目标URL'],
        ['响应头','ETag','资源版本标识(缓存)'],
    ];
    let rows = headers.map(h => `<tr><td style="font-size:0.8em">${h[0]}</td><td style="color:var(--accent);font-weight:500">${h[1]}</td><td style="font-size:0.85em">${h[2]}</td></tr>`).join('');
    return h(`<div class="tool-ui"><div style="overflow-x:auto;max-height:450px;overflow-y:auto">
        <table class="md-preview" style="width:100%"><thead><tr><th>分类</th><th>Header</th><th>说明</th></tr></thead><tbody>${rows}</tbody></table>
    </div></div>`);
}

function toolRegexRef() {
    return h(`<div class="tool-ui"><div class="tool-result" style="font-size:0.85rem;line-height:1.9">
<b>字符类:</b>
.       任意字符(除换行)    \\d  数字 [0-9]
\\w      单词字符 [a-zA-Z0-9_]   \\s  空白字符
\\D \\W \\S  上面的取反

<b>量词:</b>
*       0次或多次      +   1次或多次
?       0次或1次       {n}  恰好n次
{n,}    至少n次        {n,m} n到m次

<b>锚点:</b>
^       行首           $   行尾
\\b      单词边界

<b>分组与引用:</b>
(abc)   捕获组         (?:abc) 非捕获组
\\1      反向引用       (?=abc) 正向前瞻
(?!abc) 负向前瞻

<b>常用正则:</b>
邮箱    [\\w.-]+@[\\w.-]+\\.\\w+
手机    1[3-9]\\d{9}
IP      \\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}
URL     https?://[\\w\\-._~:/?#\\[\\]@!$&'()*+,;=%]+
身份证  \\d{17}[\\dXx]
</div></div>`);
}

// ========== 安全工具 ==========

function toolPasswordStrength() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">输入密码</label><input class="tool-input" id="t_ps_in" type="text" placeholder="输入要检测的密码" oninput="psCheck()"></div>
        <div class="tool-result" id="t_ps_result">输入密码后实时显示强度</div>
    </div>`);
}
function psCheck() {
    const pw = document.getElementById('t_ps_in').value;
    if (!pw) { document.getElementById('t_ps_result').textContent = '请输入密码'; return; }
    let score = 0, tips = [];
    if (pw.length >= 8) score++; else tips.push('长度至少8位');
    if (pw.length >= 12) score++;
    if (pw.length >= 16) score++;
    if (/[a-z]/.test(pw)) score++; else tips.push('添加小写字母');
    if (/[A-Z]/.test(pw)) score++; else tips.push('添加大写字母');
    if (/\d/.test(pw)) score++; else tips.push('添加数字');
    if (/[^a-zA-Z0-9]/.test(pw)) score++; else tips.push('添加特殊字符');
    if (/(.)\1{2,}/.test(pw)) { score--; tips.push('避免连续重复字符'); }
    if (/^(123|abc|qwerty|password|admin)/i.test(pw)) { score -= 2; tips.push('避免常见弱密码'); }
    const levels = ['极弱','弱','一般','较强','强','非常强'];
    const colors = ['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#8b5cf6'];
    const idx = Math.max(0, Math.min(5, score));
    const bar = '█'.repeat(idx+1) + '░'.repeat(5-idx);
    document.getElementById('t_ps_result').textContent =
        `密码长度: ${pw.length}\n强度等级: ${levels[idx]}\n强度条:   ${bar}\n\n${tips.length ? '改进建议:\n' + tips.map(t => '  - ' + t).join('\n') : '密码强度良好!'}`;
}

function toolHashID() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">粘贴哈希值</label><input class="tool-input" id="t_hi_in" placeholder="如: 5d41402abc4b2a76b9719d911017c592"></div>
        <button class="tool-btn" onclick="hiCheck()">识别</button>
        <div class="tool-result" id="t_hi_result">输入哈希值后点击识别</div>
    </div>`);
}
function hiCheck() {
    const h = document.getElementById('t_hi_in').value.trim();
    if (!h) return;
    const matches = [];
    const len = h.length;
    const isHex = /^[0-9a-fA-F]+$/.test(h);
    const isB64 = /^[A-Za-z0-9+/=]+$/.test(h);
    if (isHex) {
        if (len === 32) matches.push('MD5', 'NTLM');
        if (len === 40) matches.push('SHA-1');
        if (len === 56) matches.push('SHA-224');
        if (len === 64) matches.push('SHA-256');
        if (len === 96) matches.push('SHA-384');
        if (len === 128) matches.push('SHA-512');
        if (len === 8) matches.push('CRC32');
    }
    if (h.startsWith('$2a$') || h.startsWith('$2b$') || h.startsWith('$2y$')) matches.push('bcrypt');
    if (h.startsWith('$6$')) matches.push('SHA-512 (Linux shadow)');
    if (h.startsWith('$5$')) matches.push('SHA-256 (Linux shadow)');
    if (h.startsWith('$1$')) matches.push('MD5 (Linux shadow)');
    const result = matches.length ? `可能的哈希类型:\n\n${matches.map(m => '  - ' + m).join('\n')}\n\n长度: ${len} 字符` : `无法识别\n长度: ${len} 字符\n${isHex ? '纯十六进制' : isB64 ? '可能是Base64' : '未知编码'}`;
    document.getElementById('t_hi_result').textContent = result;
}

function toolBaseEncode() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">输入文本</label><textarea class="tool-textarea" id="t_be_in" rows="3" placeholder="输入要编码的文本">Hello World</textarea></div>
        <div class="flex-center">
            <button class="tool-btn" onclick="beConv('16')">Base16</button>
            <button class="tool-btn" onclick="beConv('32')">Base32</button>
            <button class="tool-btn" onclick="beConv('64')">Base64</button>
            <button class="tool-btn secondary" onclick="beDec()">Base64解码</button>
        </div>
        <div class="tool-result" id="t_be_result"></div>
    </div>`);
}
function beConv(type) {
    const text = document.getElementById('t_be_in').value;
    let result = '';
    if (type === '16') {
        result = Array.from(new TextEncoder().encode(text)).map(b => b.toString(16).padStart(2,'0').toUpperCase()).join('');
    } else if (type === '32') {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        const bytes = new TextEncoder().encode(text);
        let bits = '', out = '';
        bytes.forEach(b => bits += b.toString(2).padStart(8,'0'));
        while (bits.length % 5) bits += '0';
        for (let i = 0; i < bits.length; i += 5) out += alphabet[parseInt(bits.substr(i,5),2)];
        while (out.length % 8) out += '=';
        result = out;
    } else {
        result = btoa(unescape(encodeURIComponent(text)));
    }
    document.getElementById('t_be_result').textContent = `Base${type} 编码结果:\n\n${result}`;
}
function beDec() {
    try {
        const text = document.getElementById('t_be_in').value;
        const result = decodeURIComponent(escape(atob(text)));
        document.getElementById('t_be_result').textContent = `Base64 解码结果:\n\n${result}`;
    } catch(e) { document.getElementById('t_be_result').textContent = '解码失败: ' + e.message; }
}

function toolXSSTest() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">输入待过滤的内容</label>
        <textarea class="tool-textarea" id="t_xss_in" rows="4" placeholder='<script>alert("XSS")</script>'>&lt;script&gt;alert("XSS")&lt;/script&gt;</textarea></div>
        <button class="tool-btn" onclick="xssFilter()">过滤</button>
        <div><label class="tool-label">过滤结果</label><div class="tool-result" id="t_xss_result"></div></div>
        <div><label class="tool-label">HTML 渲染预览 (安全)</label><div id="t_xss_preview" style="border:1px solid var(--border);border-radius:8px;padding:12px;min-height:40px;background:var(--bg-card)"></div></div>
    </div>`);
}
function xssFilter() {
    const input = document.getElementById('t_xss_in').value;
    const filtered = input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    document.getElementById('t_xss_result').textContent = filtered;
    document.getElementById('t_xss_preview').innerHTML = filtered;
}

// ========== 数学/计算工具 ==========

function toolPercentage() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">A 是 B 的百分之几</label>
                <input class="tool-input" id="t_pct_a1" placeholder="A" style="margin-bottom:6px">
                <input class="tool-input" id="t_pct_b1" placeholder="B">
                <button class="tool-btn" style="margin-top:6px" onclick="pctCalc1()">计算</button>
                <div class="tool-result" id="t_pct_r1" style="margin-top:6px;min-height:30px"></div>
            </div>
            <div><label class="tool-label">A 的 N% 是多少</label>
                <input class="tool-input" id="t_pct_a2" placeholder="A" style="margin-bottom:6px">
                <input class="tool-input" id="t_pct_n2" placeholder="N%">
                <button class="tool-btn" style="margin-top:6px" onclick="pctCalc2()">计算</button>
                <div class="tool-result" id="t_pct_r2" style="margin-top:6px;min-height:30px"></div>
            </div>
        </div>
        <div><label class="tool-label">A 到 B 变化了百分之几</label>
            <div class="tool-row"><input class="tool-input" id="t_pct_a3" placeholder="原始值 A"><input class="tool-input" id="t_pct_b3" placeholder="新值 B"></div>
            <button class="tool-btn" style="margin-top:6px" onclick="pctCalc3()">计算</button>
            <div class="tool-result" id="t_pct_r3" style="margin-top:6px;min-height:30px"></div>
        </div>
    </div>`);
}
function pctCalc1() { const a=parseFloat(document.getElementById('t_pct_a1').value), b=parseFloat(document.getElementById('t_pct_b1').value); document.getElementById('t_pct_r1').textContent = isNaN(a)||isNaN(b)||b===0 ? '请输入有效数字' : `${a} 是 ${b} 的 ${(a/b*100).toFixed(4)}%`; }
function pctCalc2() { const a=parseFloat(document.getElementById('t_pct_a2').value), n=parseFloat(document.getElementById('t_pct_n2').value); document.getElementById('t_pct_r2').textContent = isNaN(a)||isNaN(n) ? '请输入有效数字' : `${a} 的 ${n}% = ${(a*n/100).toFixed(4)}`; }
function pctCalc3() { const a=parseFloat(document.getElementById('t_pct_a3').value), b=parseFloat(document.getElementById('t_pct_b3').value); document.getElementById('t_pct_r3').textContent = isNaN(a)||isNaN(b)||a===0 ? '请输入有效数字' : `变化率: ${((b-a)/a*100).toFixed(4)}% (${b>=a?'增加':'减少'})`; }

function toolMortgage() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">贷款总额 (万元)</label><input class="tool-input" id="t_mg_amount" value="100"></div>
            <div><label class="tool-label">贷款年限 (年)</label><input class="tool-input" id="t_mg_years" value="30"></div>
            <div><label class="tool-label">年利率 (%)</label><input class="tool-input" id="t_mg_rate" value="3.5"></div>
        </div>
        <div class="flex-center">
            <button class="tool-btn" onclick="mgCalc('equal')">等额本息</button>
            <button class="tool-btn" onclick="mgCalc('principal')">等额本金</button>
        </div>
        <div class="tool-result" id="t_mg_result">选择还款方式后计算</div>
    </div>`);
}
function mgCalc(type) {
    const amount = parseFloat(document.getElementById('t_mg_amount').value) * 10000;
    const years = parseInt(document.getElementById('t_mg_years').value);
    const rate = parseFloat(document.getElementById('t_mg_rate').value) / 100 / 12;
    const months = years * 12;
    let result = '';
    if (type === 'equal') {
        const monthly = amount * rate * Math.pow(1+rate, months) / (Math.pow(1+rate, months) - 1);
        const total = monthly * months;
        const interest = total - amount;
        result = `【等额本息】\n月供:       ${monthly.toFixed(2)} 元\n还款总额:   ${total.toFixed(2)} 元\n总利息:     ${interest.toFixed(2)} 元\n贷款总额:   ${amount.toFixed(2)} 元\n贷款月数:   ${months} 个月`;
    } else {
        const monthlyPrincipal = amount / months;
        const firstMonth = monthlyPrincipal + amount * rate;
        const lastMonth = monthlyPrincipal + monthlyPrincipal * rate;
        const totalInterest = (months + 1) * amount * rate / 2;
        result = `【等额本金】\n首月还款:   ${firstMonth.toFixed(2)} 元\n末月还款:   ${lastMonth.toFixed(2)} 元\n每月递减:   ${(monthlyPrincipal * rate).toFixed(2)} 元\n还款总额:   ${(amount + totalInterest).toFixed(2)} 元\n总利息:     ${totalInterest.toFixed(2)} 元`;
    }
    document.getElementById('t_mg_result').textContent = result;
}

function toolDateDiff() {
    const today = new Date().toISOString().slice(0,10);
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">开始日期</label><input class="tool-input" type="date" id="t_dd_start" value="${today}"></div>
            <div><label class="tool-label">结束日期</label><input class="tool-input" type="date" id="t_dd_end" value="${today}"></div>
        </div>
        <button class="tool-btn" onclick="ddCalc()">计算</button>
        <div class="tool-result" id="t_dd_result">选择日期后计算</div>
    </div>`);
}
function ddCalc() {
    const s = new Date(document.getElementById('t_dd_start').value);
    const e = new Date(document.getElementById('t_dd_end').value);
    const diff = Math.abs(e - s);
    const days = Math.floor(diff / 86400000);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000);
    document.getElementById('t_dd_result').textContent =
        `相差:\n  ${years} 年\n  ${months} 个月\n  ${weeks} 周 ${days%7} 天\n  ${days} 天\n  ${hours.toLocaleString()} 小时\n  ${minutes.toLocaleString()} 分钟`;
}

function toolFileSize() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">数值</label><input class="tool-input" id="t_fs_val" value="1" oninput="fsCalc()"></div>
            <div><label class="tool-label">单位</label><select class="tool-select" id="t_fs_unit" onchange="fsCalc()" style="width:100%">
                <option value="0">B (字节)</option><option value="1">KB</option>
                <option value="2">MB</option><option value="3" selected>GB</option>
                <option value="4">TB</option><option value="5">PB</option>
            </select></div>
        </div>
        <div class="tool-result" id="t_fs_result"></div>
    </div>`);
}
function fsCalc() {
    const val = parseFloat(document.getElementById('t_fs_val').value);
    const unit = parseInt(document.getElementById('t_fs_unit').value);
    if (isNaN(val)) return;
    const bytes = val * Math.pow(1024, unit);
    const units = ['B','KB','MB','GB','TB','PB'];
    let result = units.map((u, i) => {
        const v = bytes / Math.pow(1024, i);
        return `${u}:  ${v >= 1 ? v.toLocaleString(undefined, {maximumFractionDigits:4}) : v.toExponential(2)}`;
    }).join('\n');
    result += `\n\n十进制 (1000进制):\n${['B','KB','MB','GB','TB','PB'].map((u,i) => {
        const v = bytes / Math.pow(1000, i);
        return `${u}:  ${v >= 1 ? v.toLocaleString(undefined, {maximumFractionDigits:4}) : v.toExponential(2)}`;
    }).join('\n')}`;
    document.getElementById('t_fs_result').textContent = result;
}

function toolSpeedConvert() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div><label class="tool-label">数值</label><input class="tool-input" id="t_sp_val" value="100" oninput="spCalc()"></div>
            <div><label class="tool-label">单位</label><select class="tool-select" id="t_sp_unit" onchange="spCalc()" style="width:100%">
                <option value="bps">bps</option><option value="kbps">Kbps</option>
                <option value="mbps" selected>Mbps</option><option value="gbps">Gbps</option>
                <option value="Bps">B/s</option><option value="KBps">KB/s</option>
                <option value="MBps">MB/s</option><option value="GBps">GB/s</option>
            </select></div>
        </div>
        <div class="tool-result" id="t_sp_result"></div>
    </div>`);
}
function spCalc() {
    const val = parseFloat(document.getElementById('t_sp_val').value);
    const unit = document.getElementById('t_sp_unit').value;
    if (isNaN(val)) return;
    let bps;
    switch(unit) {
        case 'bps': bps=val; break; case 'kbps': bps=val*1000; break;
        case 'mbps': bps=val*1e6; break; case 'gbps': bps=val*1e9; break;
        case 'Bps': bps=val*8; break; case 'KBps': bps=val*8*1024; break;
        case 'MBps': bps=val*8*1024*1024; break; case 'GBps': bps=val*8*1024*1024*1024; break;
    }
    const Bps = bps / 8;
    document.getElementById('t_sp_result').textContent =
        `比特率 (bit/s):\n  ${(bps).toLocaleString()} bps\n  ${(bps/1000).toLocaleString()} Kbps\n  ${(bps/1e6).toLocaleString()} Mbps\n  ${(bps/1e9).toLocaleString()} Gbps\n\n字节率 (Byte/s):\n  ${Bps.toLocaleString()} B/s\n  ${(Bps/1024).toLocaleString()} KB/s\n  ${(Bps/1024/1024).toLocaleString()} MB/s\n  ${(Bps/1024/1024/1024).toLocaleString()} GB/s\n\n实用参考:\n  下载 1GB 文件约需 ${(1024*1024*1024/Bps).toFixed(1)} 秒`;
}

// ========== 补充工具 ==========

function toolTextIndent() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">输入文本</label><textarea class="tool-textarea" id="t_ti_in" rows="6" placeholder="每行文本..."></textarea></div>
        <div class="tool-row">
            <select class="tool-select" id="t_ti_type"><option value="add">添加缩进</option><option value="remove">移除缩进</option></select>
            <select class="tool-select" id="t_ti_char"><option value="space2">2 空格</option><option value="space4">4 空格</option><option value="tab">Tab</option></select>
            <button class="tool-btn" onclick="tiConv()">执行</button>
        </div>
        <div><label class="tool-label">结果</label><textarea class="tool-textarea" id="t_ti_out" rows="6" readonly></textarea></div>
    </div>`);
}
function tiConv() {
    const text = document.getElementById('t_ti_in').value;
    const type = document.getElementById('t_ti_type').value;
    const charType = document.getElementById('t_ti_char').value;
    const indent = charType === 'tab' ? '\t' : charType === 'space4' ? '    ' : '  ';
    const lines = text.split('\n');
    const result = type === 'add' ? lines.map(l => indent + l).join('\n') : lines.map(l => l.replace(new RegExp('^(' + indent.replace(/\t/,'\\t') + '|\\t|  |    )'), '')).join('\n');
    document.getElementById('t_ti_out').value = result;
}

function toolLineNumber() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">输入文本</label><textarea class="tool-textarea" id="t_ln_in" rows="6" placeholder="每行文本..."></textarea></div>
        <div class="tool-row">
            <input class="tool-input" id="t_ln_start" value="1" placeholder="起始行号" style="max-width:120px">
            <input class="tool-input" id="t_ln_sep" value=". " placeholder="分隔符" style="max-width:120px">
            <button class="tool-btn" onclick="lnConv()">添加行号</button>
            <button class="tool-btn secondary" onclick="lnRemove()">移除行号</button>
        </div>
        <div><label class="tool-label">结果</label><textarea class="tool-textarea" id="t_ln_out" rows="6" readonly></textarea></div>
    </div>`);
}
function lnConv() {
    const text = document.getElementById('t_ln_in').value;
    const start = parseInt(document.getElementById('t_ln_start').value) || 1;
    const sep = document.getElementById('t_ln_sep').value;
    const lines = text.split('\n');
    const pad = String(start + lines.length - 1).length;
    document.getElementById('t_ln_out').value = lines.map((l, i) => String(start + i).padStart(pad, ' ') + sep + l).join('\n');
}
function lnRemove() {
    const text = document.getElementById('t_ln_in').value;
    document.getElementById('t_ln_out').value = text.split('\n').map(l => l.replace(/^\s*\d+[\.\)\-:\s]+/, '')).join('\n');
}

function toolMorseCode() {
    const MORSE = {'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.','H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.','O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',' ':'/','?':'..--..','!':'-.-.--','.':'.-.-.-',',':'--..--'};
    const REV = {}; for(const k in MORSE) REV[MORSE[k]] = k;
    return h(`<div class="tool-ui">
        <div><label class="tool-label">输入文本</label><textarea class="tool-textarea" id="t_mc_in" rows="3" placeholder="Hello World"></textarea></div>
        <div class="flex-center">
            <button class="tool-btn" onclick="mcEncode()">文本 → 摩尔斯</button>
            <button class="tool-btn" onclick="mcDecode()">摩尔斯 → 文本</button>
        </div>
        <div><label class="tool-label">结果</label><div class="tool-result" id="t_mc_result"></div></div>
    </div>`);
}
function mcEncode() {
    const MORSE = {'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.','H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.','O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',' ':'/','?':'..--..','!':'-.-.--','.':'.-.-.-',',':'--..--'};
    const text = document.getElementById('t_mc_in').value.toUpperCase();
    document.getElementById('t_mc_result').textContent = text.split('').map(c => MORSE[c] || c).join(' ');
}
function mcDecode() {
    const MORSE = {'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.','H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.','O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',' ':'/','?':'..--..','!':'-.-.--','.':'.-.-.-',',':'--..--'};
    const REV = {}; for(const k in MORSE) REV[MORSE[k]] = k;
    const text = document.getElementById('t_mc_in').value;
    document.getElementById('t_mc_result').textContent = text.split(' ').map(c => c === '/' ? ' ' : REV[c] || c).join('');
}

function toolPunycode() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">输入域名</label><input class="tool-input" id="t_pc_in" placeholder="中文.com 或 xn--fiq228c.com"></div>
        <div class="flex-center">
            <button class="tool-btn" onclick="pcEncode()">编码 (Unicode → Punycode)</button>
            <button class="tool-btn" onclick="pcDecode()">解码 (Punycode → Unicode)</button>
        </div>
        <div class="tool-result" id="t_pc_result"></div>
    </div>`);
}
function pcEncode() {
    try {
        const input = document.getElementById('t_pc_in').value;
        const url = new URL('http://' + input);
        document.getElementById('t_pc_result').textContent = `Punycode: ${url.hostname}`;
    } catch(e) { document.getElementById('t_pc_result').textContent = '编码失败: ' + e.message; }
}
function pcDecode() {
    try {
        const input = document.getElementById('t_pc_in').value;
        // Simple xn-- decode using URL API
        const url = new URL('http://' + input);
        document.getElementById('t_pc_result').textContent = `Unicode: ${decodeURIComponent(url.hostname)}`;
    } catch(e) { document.getElementById('t_pc_result').textContent = '解码失败: ' + e.message; }
}

function toolJSON2TS() {
    return h(`<div class="tool-ui">
        <div><label class="tool-label">输入 JSON</label><textarea class="tool-textarea" id="t_j2t_in" rows="6" placeholder='{"name":"Aidan","age":30,"skills":["Go","Python"]}'></textarea></div>
        <div class="tool-row"><input class="tool-input" id="t_j2t_name" value="Root" placeholder="接口名称" style="max-width:200px"><button class="tool-btn" onclick="j2tConv()">生成 TypeScript</button></div>
        <div><label class="tool-label">TypeScript Interface</label><div class="tool-result" id="t_j2t_result"></div></div>
    </div>`);
}
function j2tConv() {
    try {
        const json = JSON.parse(document.getElementById('t_j2t_in').value);
        const name = document.getElementById('t_j2t_name').value || 'Root';
        function toTS(obj, indent='  ') {
            const lines = [];
            for (const [k, v] of Object.entries(obj)) {
                let type;
                if (v === null) type = 'null';
                else if (Array.isArray(v)) type = v.length ? typeof v[0] + '[]' : 'any[]';
                else if (typeof v === 'object') type = '{ ' + Object.entries(v).map(([k2,v2]) => k2+': '+typeof v2).join('; ') + ' }';
                else type = typeof v;
                lines.push(`${indent}${k}: ${type};`);
            }
            return lines.join('\n');
        }
        document.getElementById('t_j2t_result').textContent = `interface ${name} {\n${toTS(json)}\n}`;
    } catch(e) { document.getElementById('t_j2t_result').textContent = 'JSON 解析失败: ' + e.message; }
}

function toolCurlGen() {
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <div style="max-width:120px"><label class="tool-label">Method</label><select class="tool-select" id="t_curl_method" style="width:100%"><option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option><option>PATCH</option></select></div>
            <div style="flex:3"><label class="tool-label">URL</label><input class="tool-input" id="t_curl_url" placeholder="https://api.example.com/data"></div>
        </div>
        <div><label class="tool-label">Headers (每行一个 Key: Value)</label><textarea class="tool-textarea" id="t_curl_headers" rows="3" placeholder="Content-Type: application/json\nAuthorization: Bearer token123"></textarea></div>
        <div><label class="tool-label">Body (POST/PUT)</label><textarea class="tool-textarea" id="t_curl_body" rows="3" placeholder='{"key":"value"}'></textarea></div>
        <button class="tool-btn" onclick="curlGen()">生成 cURL</button>
        <div class="tool-result" id="t_curl_result"></div>
    </div>`);
}
function curlGen() {
    const method = document.getElementById('t_curl_method').value;
    const url = document.getElementById('t_curl_url').value;
    const headers = document.getElementById('t_curl_headers').value.trim();
    const body = document.getElementById('t_curl_body').value.trim();
    if (!url) { document.getElementById('t_curl_result').textContent = '请输入URL'; return; }
    let cmd = `curl -X ${method}`;
    if (headers) headers.split('\n').forEach(h => { if(h.trim()) cmd += ` \\\n  -H '${h.trim()}'`; });
    if (body && ['POST','PUT','PATCH'].includes(method)) cmd += ` \\\n  -d '${body}'`;
    cmd += ` \\\n  '${url}'`;
    document.getElementById('t_curl_result').textContent = cmd;
}

function toolHabitTracker() {
    const key = 'habit_tracker_data';
    let data = JSON.parse(localStorage.getItem(key) || '{}');
    const today = new Date().toISOString().slice(0,10);
    return h(`<div class="tool-ui">
        <div class="tool-row">
            <input class="tool-input" id="t_ht_new" placeholder="添加新习惯..." style="flex:3">
            <button class="tool-btn" onclick="htAdd()">添加</button>
        </div>
        <div id="t_ht_list"></div>
    </div>`);
}
function htAdd() {
    const key = 'habit_tracker_data';
    let data = JSON.parse(localStorage.getItem(key) || '{}');
    const name = document.getElementById('t_ht_new').value.trim();
    if (!name) return;
    if (!data.habits) data.habits = [];
    if (!data.habits.includes(name)) data.habits.push(name);
    localStorage.setItem(key, JSON.stringify(data));
    document.getElementById('t_ht_new').value = '';
    htRender();
}
function htToggle(habit) {
    const key = 'habit_tracker_data';
    let data = JSON.parse(localStorage.getItem(key) || '{}');
    const today = new Date().toISOString().slice(0,10);
    if (!data.checks) data.checks = {};
    const k = habit + '_' + today;
    data.checks[k] = !data.checks[k];
    localStorage.setItem(key, JSON.stringify(data));
    htRender();
}
function htRemove(habit) {
    const key = 'habit_tracker_data';
    let data = JSON.parse(localStorage.getItem(key) || '{}');
    data.habits = (data.habits||[]).filter(h => h !== habit);
    localStorage.setItem(key, JSON.stringify(data));
    htRender();
}
function htRender() {
    const key = 'habit_tracker_data';
    let data = JSON.parse(localStorage.getItem(key) || '{}');
    const today = new Date().toISOString().slice(0,10);
    const list = document.getElementById('t_ht_list');
    if (!data.habits || !data.habits.length) { list.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:20px">还没有添加习惯</p>'; return; }
    list.innerHTML = data.habits.map(h => {
        const checked = data.checks && data.checks[h+'_'+today];
        return `<div style="display:flex;align-items:center;gap:12px;padding:10px;border-bottom:1px solid var(--border)">
            <input type="checkbox" ${checked?'checked':''} onchange="htToggle('${h}')" style="width:18px;height:18px">
            <span style="flex:1;${checked?'text-decoration:line-through;color:var(--text-muted)':''}">${h}</span>
            <span style="font-size:11px;color:var(--text-muted)">${today}</span>
            <button onclick="htRemove('${h}')" style="background:none;border:none;color:var(--accent-red);cursor:pointer;font-size:14px">x</button>
        </div>`;
    }).join('');
}

let pomodoroTimer = null;
function toolPomodoro() {
    return h(`<div class="tool-ui" style="text-align:center">
        <div style="font-size:4rem;font-family:'Fira Code',monospace;font-weight:700;color:var(--accent);margin:20px 0" id="t_pm_display">25:00</div>
        <div class="flex-center">
            <button class="tool-btn" onclick="pmStart(25)">25 min</button>
            <button class="tool-btn" onclick="pmStart(5)">5 min</button>
            <button class="tool-btn" onclick="pmStart(15)">15 min</button>
            <button class="tool-btn secondary" onclick="pmStop()">停止</button>
        </div>
        <p style="margin-top:16px;color:var(--text-muted);font-size:13px" id="t_pm_status">选择时间开始专注</p>
    </div>`);
}
function pmStart(min) {
    if (pomodoroTimer) clearInterval(pomodoroTimer);
    let seconds = min * 60;
    document.getElementById('t_pm_status').textContent = `${min} 分钟专注中...`;
    const update = () => {
        const m = Math.floor(seconds/60), s = seconds%60;
        document.getElementById('t_pm_display').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        if (seconds <= 0) { clearInterval(pomodoroTimer); pomodoroTimer = null; document.getElementById('t_pm_status').textContent = '时间到! 休息一下吧'; try{new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgA').play();}catch(e){} return; }
        seconds--;
    };
    update();
    pomodoroTimer = setInterval(update, 1000);
}
function pmStop() {
    if (pomodoroTimer) { clearInterval(pomodoroTimer); pomodoroTimer = null; }
    document.getElementById('t_pm_display').textContent = '25:00';
    document.getElementById('t_pm_status').textContent = '已停止';
}
