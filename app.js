const app = {
    userKey: 'taskmaster_user',
    usersKey: 'taskmaster_users',
    tasksKey: 'taskmaster_tasks',
    settingsKey: 'taskmaster_settings',
    langKey: 'taskmaster_lang',
    demoKey: 'taskmaster_demo'
}

const words = {
    en: {
        dashboard: 'Dashboard',
        addTask: 'Add Task',
        progress: 'Progress',
        settings: 'Settings',
        logout: 'Logout',
        welcome: 'Welcome back',
        todaysFocus: 'Today is a good day to reduce clutter and finish important work.',
        totalTasks: 'Total Tasks',
        pending: 'Pending',
        completed: 'Completed',
        highPriority: 'High Priority',
        allTasks: 'All Tasks',
        dueSoon: 'Due Soon',
        done: 'Done',
        whyThisWorks: 'Design Notes',
        addTaskTitle: 'Add a task',
        addTaskText: 'The form keeps only the fields needed for quick entry. Labels stay visible to support recognition over recall.',
        bigTargets: 'Big click areas',
        bigTargetsText: 'Buttons and task controls are large and close to the main flow, supporting Fitts’ Law.',
        clearFeedback: 'Clear feedback',
        clearFeedbackText: 'Completion ticks, badges, and toast messages give immediate system status.',
        progressTitle: 'Progress Overview',
        settingsTitle: 'Accessibility and Preferences',
        language: 'Language',
        fontSize: 'Font Size',
        highContrast: 'High Contrast',
        reduceMotion: 'Reduce Motion',
        simpleMode: 'Simple Layout',
        saveChanges: 'Save Changes',
        taskTitle: 'Task title',
        category: 'Category',
        dueDate: 'Date',
        dueTime: 'Time',
        priority: 'Priority',
        description: 'Description',
        saveTask: 'Save Task',
        taskAdded: 'Task added successfully',
        taskUpdated: 'Task updated successfully',
        taskDeleted: 'Task removed',
        loginSuccess: 'Login successful',
        signupSuccess: 'Account created. You can log in now.',
        resetSent: 'A demo reset link message has been shown on screen.',
        feedbackHeading: 'How feedback changed the interface',
        showedFriends: 'We showed the working screens to friends in person and used their feedback to simplify the flow.',
        topFeedback: 'Best-rated areas from the form',
        principleMap: 'Design principles visible on screen',
        peerTest: 'Peer feedback and refinement',
        peerText: 'After showing the app to friends, spacing was increased, the add task path was shortened, and status badges were made clearer.'
    },
    ta: {
        dashboard: 'டாஷ்போர்டு',
        addTask: 'பணி சேர்க்க',
        progress: 'முன்னேற்றம்',
        settings: 'அமைப்புகள்',
        logout: 'வெளியேறு',
        welcome: 'மீண்டும் வரவேற்கிறோம்',
        todaysFocus: 'இன்று முக்கியமான பணிகளை முடிக்க நல்ல நாள்.',
        totalTasks: 'மொத்த பணிகள்',
        pending: 'நிலுவையில்',
        completed: 'முடிந்தது',
        highPriority: 'உயர் முன்னுரிமை',
        allTasks: 'அனைத்து பணிகள்',
        dueSoon: 'விரைவில் முடிக்க',
        done: 'முடிந்தவை',
        whyThisWorks: 'இந்த அமைப்பு ஏன் நன்றாக வேலை செய்கிறது',
        addTaskTitle: 'ஒரு பணி சேர்க்க',
        addTaskText: 'வேகமான உள்ளீட்டிற்கு தேவையான புலங்கள் மட்டும் காட்டப்படுகின்றன.',
        bigTargets: 'பெரிய கிளிக் பகுதி',
        bigTargetsText: 'பட்டன்கள் பெரியதாகவும் எளிதாகவும் உள்ளன.',
        clearFeedback: 'தெளிவான பின்னூட்டம்',
        clearFeedbackText: 'நிலை உடனடியாக தெரியும்.',
        progressTitle: 'முன்னேற்ற பார்வை',
        settingsTitle: 'அணுகல்தன்மை மற்றும் விருப்பங்கள்',
        language: 'மொழி',
        fontSize: 'எழுத்து அளவு',
        highContrast: 'அதிக மாறுபாடு',
        reduceMotion: 'இயக்கம் குறை',
        simpleMode: 'எளிய அமைப்பு',
        saveChanges: 'மாற்றங்களை சேமிக்க',
        taskTitle: 'பணி தலைப்பு',
        category: 'வகை',
        dueDate: 'தேதி',
        dueTime: 'நேரம்',
        priority: 'முன்னுரிமை',
        description: 'விளக்கம்',
        saveTask: 'பணி சேமிக்க',
        taskAdded: 'பணி வெற்றிகரமாக சேர்க்கப்பட்டது',
        taskUpdated: 'பணி புதுப்பிக்கப்பட்டது',
        taskDeleted: 'பணி நீக்கப்பட்டது',
        loginSuccess: 'உள்நுழைவு வெற்றி',
        signupSuccess: 'கணக்கு உருவாக்கப்பட்டது. இப்போது உள்நுழையலாம்.',
        resetSent: 'காட்சிக்கான ரிசெட் செய்தி காட்டப்பட்டது.',
        feedbackHeading: 'கருத்துகளால் மாற்றப்பட்ட இடைமுகம்',
        showedFriends: 'நாங்கள் நண்பர்களுக்கு செயலியை நேரில் காட்டி, அவர்களின் கருத்தை கொண்டு அமைப்பை எளிமைப்படுத்தினோம்.',
        topFeedback: 'படிவத்தில் சிறந்த மதிப்பீடு பெற்ற பகுதிகள்',
        principleMap: 'திரையில் காணப்படும் வடிவமைப்பு கோட்பாடுகள்',
        peerTest: 'நண்பர் சோதனை மற்றும் திருத்தம்',
        peerText: 'கருத்துக்கு பிறகு இடைவெளி அதிகரிக்கப்பட்டது, add task பாதை சுருக்கப்பட்டது, நிலை badge-கள் தெளிவாக்கப்பட்டன.'
    },
    hi: {
        dashboard: 'डैशबोर्ड',
        addTask: 'टास्क जोड़ें',
        progress: 'प्रगति',
        settings: 'सेटिंग्स',
        logout: 'लॉगआउट',
        welcome: 'फिर से स्वागत है',
        todaysFocus: 'आज महत्वपूर्ण काम जल्दी पूरा करने का अच्छा दिन है।',
        totalTasks: 'कुल कार्य',
        pending: 'लंबित',
        completed: 'पूर्ण',
        highPriority: 'उच्च प्राथमिकता',
        allTasks: 'सभी कार्य',
        dueSoon: 'जल्द पूरा करें',
        done: 'पूर्ण कार्य',
        whyThisWorks: 'यह लेआउट क्यों काम करता है',
        addTaskTitle: 'एक कार्य जोड़ें',
        addTaskText: 'फॉर्म में केवल जरूरी फ़ील्ड रखे गए हैं ताकि उपयोग आसान रहे।',
        bigTargets: 'बड़े क्लिक क्षेत्र',
        bigTargetsText: 'बटन बड़े और पास में रखे गए हैं।',
        clearFeedback: 'स्पष्ट फीडबैक',
        clearFeedbackText: 'टिक, बैज और संदेश तुरंत स्थिति दिखाते हैं।',
        progressTitle: 'प्रगति अवलोकन',
        settingsTitle: 'एक्सेसिबिलिटी और पसंद',
        language: 'भाषा',
        fontSize: 'फ़ॉन्ट आकार',
        highContrast: 'हाई कॉन्ट्रास्ट',
        reduceMotion: 'मोशन कम करें',
        simpleMode: 'सरल लेआउट',
        saveChanges: 'परिवर्तन सहेजें',
        taskTitle: 'कार्य शीर्षक',
        category: 'श्रेणी',
        dueDate: 'तारीख',
        dueTime: 'समय',
        priority: 'प्राथमिकता',
        description: 'विवरण',
        saveTask: 'कार्य सहेजें',
        taskAdded: 'कार्य सफलतापूर्वक जोड़ा गया',
        taskUpdated: 'कार्य अपडेट किया गया',
        taskDeleted: 'कार्य हटाया गया',
        loginSuccess: 'लॉगिन सफल',
        signupSuccess: 'खाता बन गया। अब लॉगिन करें।',
        resetSent: 'डेमो रीसेट संदेश दिखाया गया।',
        feedbackHeading: 'फीडबैक से बदला गया इंटरफेस',
        showedFriends: 'हमने यह ऐप दोस्तों को सामने दिखाया और उनके फीडबैक से फ्लो को सरल बनाया।',
        topFeedback: 'फॉर्म के सबसे अच्छे रेटेड क्षेत्र',
        principleMap: 'स्क्रीन पर दिख रहे डिज़ाइन सिद्धांत',
        peerTest: 'पीयर परीक्षण और सुधार',
        peerText: 'फीडबैक के बाद spacing बढ़ाई गई, add task flow छोटा किया गया, और status badges स्पष्ट किए गए।'
    }
}

function setDefaultData() {
    const users = read(app.usersKey, [])
    if (!users.length) {
        users.push({
            name: 'Demo User',
            email: 'user@taskmaster.com',
            password: '1234'
        })
        write(app.usersKey, users)
    }

    const tasks = read(app.tasksKey, [])
    if (!tasks.length) {
        write(app.tasksKey, [
            makeTask('HCI Assignment Draft', 'Finalize screenshots and structure the report.', 'Study', 'High', daysFromNow(0), '19:00', false),
            makeTask('Toastmasters Agenda', 'Prepare role call and theme line for the meeting.', 'Project', 'Medium', daysFromNow(1), '18:30', false),
            makeTask('DBMS Practice', 'Revise joins, views, and PL/SQL questions.', 'Study', 'High', daysFromNow(2), '21:00', false),
            makeTask('Water Bottle Refill', 'Keep one simple personal reminder visible on dashboard.', 'Personal', 'Low', daysFromNow(0), '17:00', true),
            makeTask('Team Discussion', 'Check final wording for HCI principles in viva points.', 'Project', 'Medium', daysFromNow(1), '20:00', false),
            makeTask('Walk and Stretch', 'Short break task kept simple for accessibility demo.', 'Health', 'Low', daysFromNow(3), '06:30', false)
        ])
    }

    const settings = read(app.settingsKey, null)
    if (!settings) {
        write(app.settingsKey, {
            language: 'en',
            fontSize: '16',
            contrast: false,
            reduceMotion: false,
            simpleMode: false,
            showNotes: false
        })
    }
}

function makeTask(title, description, category, priority, date, time, done) {
    return {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
        title,
        description,
        category,
        priority,
        date,
        time,
        done,
        createdAt: new Date().toISOString()
    }
}

function daysFromNow(offset) {
    const d = new Date()
    d.setDate(d.getDate() + offset)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

function read(key, fallback) {
    try {
        const raw = localStorage.getItem(key)
        if (!raw) {
            return fallback
        }
        return JSON.parse(raw)
    } catch (e) {
        return fallback
    }
}

function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getSettings() {
    return read(app.settingsKey, {
        language: 'en',
        fontSize: '16',
        contrast: false,
        reduceMotion: false,
        simpleMode: false,
        showNotes: false
    })
}

function applySettings() {
    const s = getSettings()
    document.documentElement.style.setProperty('--font-size', `${s.fontSize}px`)
    document.body.classList.toggle('contrast', !!s.contrast)
    document.body.classList.toggle('reduce-motion', !!s.reduceMotion)
    document.body.classList.toggle('simple-mode', !!s.simpleMode)
    document.body.classList.toggle('show-notes', !!s.showNotes)
    localStorage.setItem(app.langKey, s.language)
}

function currentLang() {
    return localStorage.getItem(app.langKey) || getSettings().language || 'en'
}

function t(key) {
    const lang = currentLang()
    const pack = words[lang] || words.en
    return pack[key] || words.en[key] || key
}

function bindText() {
    document.querySelectorAll('[data-word]').forEach(node => {
        node.textContent = t(node.dataset.word)
    })
}

function getCurrentUser() {
    return read(app.userKey, null)
}

function requireLogin() {
    if (!getCurrentUser()) {
        window.location.href = 'index.html'
    }
}

function showToast(text) {
    const old = document.querySelector('.toast')
    if (old) {
        old.remove()
    }
    const toast = document.createElement('div')
    toast.className = 'toast'
    toast.textContent = text
    document.body.appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 2200)
}

function login(email, password) {
    const users = read(app.usersKey, [])
    const user = users.find(u => u.email === email && u.password === password)
    if (!user) {
        showToast('Invalid username or password')
        return false
    }
    const { password: _, ...sessionUser } = user
    write(app.userKey, sessionUser)
    showToast(t('loginSuccess'))
    setTimeout(() => {
        window.location.href = 'dashboard.html'
    }, 500)
    return true
}

function signup(name, email, password) {
    const users = read(app.usersKey, [])
    const exists = users.find(user => user.email === email)
    if (exists) {
        showToast('Account already exists for this email')
        return false
    }
    users.push({ name, email, password })
    write(app.usersKey, users)
    showToast(t('signupSuccess'))
    setTimeout(() => {
        window.location.href = 'index.html'
    }, 700)
    return true
}

function logout() {
    localStorage.removeItem(app.userKey)
    window.location.href = 'index.html'
}

function allTasks() {
    return read(app.tasksKey, [])
}

function saveTasks(tasks) {
    write(app.tasksKey, tasks)
}

function addTask(task) {
    const tasks = allTasks()
    tasks.unshift(task)
    saveTasks(tasks)
    showToast(t('taskAdded'))
}

function toggleTask(id) {
    const tasks = allTasks()
    const changed = tasks.map(task => {
        if (task.id === id) {
            return { ...task, done: !task.done }
        }
        return task
    })
    saveTasks(changed)
}

function deleteTask(id) {
    const tasks = allTasks().filter(task => task.id !== id)
    saveTasks(tasks)
    showToast(t('taskDeleted'))
}

function stats() {
    const tasks = allTasks()
    const total = tasks.length
    const completed = tasks.filter(task => task.done).length
    const pending = total - completed
    const highPriority = tasks.filter(task => !task.done && task.priority === 'High').length
    const dueSoon = tasks.filter(task => !task.done).sort(byDateTime).slice(0, 3)
    return { total, completed, pending, highPriority, dueSoon }
}

function byDateTime(a, b) {
    const one = new Date(`${a.date}T${a.time || '23:59'}`)
    const two = new Date(`${b.date}T${b.time || '23:59'}`)
    return one - two
}

function formatDate(date, time) {
    const base = new Date(`${date}T${time || '12:00'}`)
    const options = { day: 'numeric', month: 'short' }
    return `${base.toLocaleDateString('en-IN', options)}${time ? ' • ' + time : ''}`
}

function renderDashboard(filter = 'all') {
    const area = document.getElementById('taskList')
    if (!area) {
        return
    }
    const tasks = allTasks().sort(byDateTime)
    const list = tasks.filter(task => {
        if (filter === 'all') {
            return true
        }
        if (filter === 'due') {
            return !task.done
        }
        if (filter === 'done') {
            return task.done
        }
        return true
    })

    if (!list.length) {
        area.innerHTML = `<div class="empty-box">No tasks found in this view.</div>`
        return
    }

    area.innerHTML = list.map(task => {
        const priorityClass = task.priority.toLowerCase()
        const catClass = task.category.toLowerCase()
        return `
            <div class="task-card ${task.done ? 'done' : ''}">
                <input class="task-check" type="checkbox" ${task.done ? 'checked' : ''} onchange="changeTask('${task.id}')">
                <div>
                    <h3 class="task-name">${task.title}</h3>
                    <p class="task-desc">${task.description}</p>
                    <div class="meta-row">
                        <span class="badge ${priorityClass}">${task.priority}</span>
                        <span class="badge ${catClass}">${task.category}</span>
                        <span class="badge soon">${formatDate(task.date, task.time)}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="icon-btn" onclick="removeTask('${task.id}')">×</button>
                </div>
            </div>
        `
    }).join('')
}

function changeTask(id) {
    toggleTask(id)
    loadDashboardPage(activeFilter())
}

function removeTask(id) {
    deleteTask(id)
    loadDashboardPage(activeFilter())
}

function activeFilter() {
    const btn = document.querySelector('.tab-btn.active')
    if (!btn) {
        return 'all'
    }
    return btn.dataset.filter
}

function loadDashboardPage(filter = 'all') {
    const s = stats()
    const user = getCurrentUser()
    const welcome = document.getElementById('welcomeName')
    if (welcome && user) {
        welcome.textContent = `${t('welcome')}, ${user.name.split(' ')[0]}`
    }
    fill('countTotal', s.total)
    fill('countPending', s.pending)
    fill('countCompleted', s.completed)
    fill('countHigh', s.highPriority)
    renderDashboard(filter)

    const dueWrap = document.getElementById('dueSoonList')
    if (dueWrap) {
        dueWrap.innerHTML = s.dueSoon.map(task => `
            <div class="feedback-item">
                <strong>${task.title}</strong>
                <span>${formatDate(task.date, task.time)}</span>
            </div>
        `).join('') || `<div class="feedback-item"><strong>Everything is under control</strong><span>No urgent task right now</span></div>`
    }
}

function fill(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.textContent = value
    }
}

function submitAddTask(form) {
    const title = form.title.value.trim()
    const category = form.category.value
    const date = form.date.value
    const time = form.time.value
    const priority = form.priority.value
    const description = form.description.value.trim()

    if (!title || !category || !date || !priority) {
        showToast('Please fill the required fields')
        return false
    }

    addTask(makeTask(title, description, category, priority, date, time, false))
    form.reset()
    setTimeout(() => {
        window.location.href = 'dashboard.html'
    }, 500)
    return false
}

function loadProgressPage() {
    const s = stats()
    const percent = s.total ? Math.round((s.completed / s.total) * 100) : 0
    const ring = document.getElementById('progressRing')
    if (ring) {
        ring.style.setProperty('--fill', `${percent * 3.6}deg`)
        ring.querySelector('span').textContent = `${percent}%`
    }

    const bars = {
        barCompleted: percent,
        barPending: s.total ? Math.round((s.pending / s.total) * 100) : 0,
        barHigh: s.total ? Math.round((s.highPriority / s.total) * 100) : 0
    }

    Object.entries(bars).forEach(([id, value]) => {
        const bar = document.getElementById(id)
        if (bar) {
            bar.style.width = `${value}%`
        }
        const label = document.getElementById(id + 'Text')
        if (label) {
            label.textContent = `${value}%`
        }
    })

    fill('progressTotal', s.total)
    fill('progressCompleted', s.completed)
    fill('progressPending', s.pending)
    fill('progressHigh', s.highPriority)
}

function loadSettingsPage() {
    const s = getSettings()
    const language = document.getElementById('language')
    const fontSize = document.getElementById('fontSize')
    const contrast = document.getElementById('contrast')
    const reduceMotion = document.getElementById('reduceMotion')
    const simpleMode = document.getElementById('simpleMode')
    if (language) language.value = s.language
    if (fontSize) fontSize.value = s.fontSize
    if (contrast) contrast.checked = s.contrast
    if (reduceMotion) reduceMotion.checked = s.reduceMotion
    if (simpleMode) simpleMode.checked = s.simpleMode
    const showNotes = document.getElementById('showNotes')
    if (showNotes) showNotes.checked = !!s.showNotes
    syncDemoTools()
}

function syncDemoTools() {
    const showNotes = document.getElementById('showNotes')
    const demoTools = document.getElementById('demoTools')
    if (!demoTools) {
        return
    }
    demoTools.classList.toggle('visible', !!(showNotes && showNotes.checked))
    updateFloatingDemoTools()
}

function shouldShowNotes() {
    return !!getSettings().showNotes
}

const demoState = {
    name: '',
    index: 0
}

const principleRoutes = {
    "Hick's Law": {
        page: 'dashboard.html',
        targets: [
            { selector: '#demoHickTabs', title: "Hick's Law", text: 'Only three task views are shown here, so the user chooses quickly without scanning too many options.', placement: 'right' }
        ]
    },
    "Fitts' Law": {
        page: 'add-task.html',
        targets: [
            { selector: '#demoFittsActions', title: "Fitts' Law", text: 'The main action buttons are large, clear, and kept close to the task form for fast interaction.', placement: 'right' }
        ]
    },
    "Recognition over Recall": {
        page: 'add-task.html',
        targets: [
            { selector: '#demoRecognitionForm .field:first-child', title: 'Recognition over Recall', text: 'Labels stay visible beside each field, so the user does not need to remember hidden meanings.', placement: 'right' },
            { selector: '#demoRecognitionForm .two-col .field:first-child', title: 'Grouped choices', text: 'Related fields are grouped together in a familiar order.', placement: 'bottom' }
        ]
    },
    "Consistency": {
        page: 'dashboard.html',
        targets: [
            { selector: '.sidebar', title: 'Consistency', text: 'Navigation, spacing, and card styling stay consistent across all major screens.', placement: 'right' },
            { selector: '#demoConsistencyPanel', title: 'Repeated structure', text: 'The same layout pattern is reused so users learn the system once and continue easily.', placement: 'left' }
        ]
    },
    "Feedback": {
        page: 'progress.html',
        targets: [
            { selector: '#demoProgressStatus', title: 'Feedback', text: 'Completion rate, counts, and task distribution make the system status visible immediately.', placement: 'right' }
        ]
    },
    "Universal Design": {
        page: 'settings.html',
        targets: [
            { selector: '#demoUniversalDesign', title: 'Universal Design', text: 'Language, size, contrast, motion, and simple mode support a wider range of users from one screen.', placement: 'left' }
        ]
    }
}

function currentDemoName() {
    return demoState.name || localStorage.getItem(app.demoKey) || ''
}

function currentDemoConfig() {
    return principleRoutes[currentDemoName()] || null
}

function updateFloatingDemoTools() {
    const dock = document.getElementById('floatingDemoTools')
    if (!dock) {
        return
    }
    const active = !!currentDemoName()
    dock.classList.toggle('visible', shouldShowNotes())
    dock.classList.toggle('active-demo', active)
    const prevBtn = dock.querySelector('[data-demo-prev]')
    const nextBtn = dock.querySelector('[data-demo-next]')
    const exitBtn = dock.querySelector('[data-exit-demo]')
    const label = dock.querySelector('[data-demo-label]')
    const config = currentDemoConfig()
    if (exitBtn) {
        exitBtn.style.display = active ? 'inline-flex' : 'none'
    }
    if (prevBtn && nextBtn) {
        const many = !!(config && config.targets && config.targets.length > 1)
        prevBtn.style.display = active && many ? 'inline-flex' : 'none'
        nextBtn.style.display = active && many ? 'inline-flex' : 'none'
        if (many) {
            prevBtn.disabled = demoState.index <= 0
            nextBtn.disabled = demoState.index >= config.targets.length - 1
        }
    }
    if (label) {
        label.textContent = active ? currentDemoName() : ''
        label.style.display = active ? 'inline-flex' : 'none'
    }
}

function ensureFloatingDemoTools() {
    let dock = document.getElementById('floatingDemoTools')
    if (!dock) {
        dock = document.createElement('div')
        dock.id = 'floatingDemoTools'
        dock.className = 'floating-demo-tools'
        dock.innerHTML = `
            <button type="button" class="ghost-btn floating-demo-btn" id="floatingPrincipleMap">Show principles</button>
            <span class="floating-demo-label" data-demo-label></span>
            <button type="button" class="ghost-btn floating-demo-btn" data-demo-prev>← Prev</button>
            <button type="button" class="ghost-btn floating-demo-btn" data-demo-next>Next →</button>
            <button type="button" class="ghost-btn floating-demo-btn exit" data-exit-demo title="Exit highlight view">× Exit demo</button>
        `
        document.body.appendChild(dock)
    }
    const openBtn = document.getElementById('floatingPrincipleMap')
    if (openBtn && !openBtn.dataset.bound) {
        openBtn.dataset.bound = '1'
        openBtn.addEventListener('click', openPrincipleModal)
    }
    const prevBtn = dock.querySelector('[data-demo-prev]')
    if (prevBtn && !prevBtn.dataset.bound) {
        prevBtn.dataset.bound = '1'
        prevBtn.addEventListener('click', () => stepPrincipleDemo(-1))
    }
    const nextBtn = dock.querySelector('[data-demo-next]')
    if (nextBtn && !nextBtn.dataset.bound) {
        nextBtn.dataset.bound = '1'
        nextBtn.addEventListener('click', () => stepPrincipleDemo(1))
    }
    const exitBtn = dock.querySelector('[data-exit-demo]')
    if (exitBtn && !exitBtn.dataset.bound) {
        exitBtn.dataset.bound = '1'
        exitBtn.addEventListener('click', exitPrincipleDemo)
    }
    updateFloatingDemoTools()
}

function exitPrincipleDemo() {
    demoState.name = ''
    demoState.index = 0
    localStorage.removeItem(app.demoKey)
    clearDemoOverlay()
    const params = new URLSearchParams(window.location.search)
    if (params.get('demo') && window.history) {
        params.delete('demo')
        const clean = window.location.pathname + (params.toString() ? '?' + params.toString() : '')
        window.history.replaceState({}, '', clean)
    }
    updateFloatingDemoTools()
}

function stepPrincipleDemo(step) {
    const config = currentDemoConfig()
    if (!config) {
        return
    }
    const next = Math.max(0, Math.min((config.targets.length || 1) - 1, demoState.index + step))
    if (next === demoState.index) {
        return
    }
    demoState.index = next
    renderDemoStep(config)
}

function renderDemoStep(config) {
    clearDemoOverlay()
    const item = config.targets[demoState.index]
    if (!item) {
        updateFloatingDemoTools()
        return
    }
    const target = document.querySelector(item.selector)
    if (!target) {
        updateFloatingDemoTools()
        return
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setTimeout(() => {
        clearDemoOverlay()
        const overlay = document.createElement('div')
        overlay.id = 'demoOverlay'
        overlay.className = 'demo-overlay'
        document.body.appendChild(overlay)
        target.classList.add('demo-focus')
        createCallout(item, target, overlay)
        updateFloatingDemoTools()
    }, 260)
}


function openPrincipleModal() {
    const modal = document.getElementById('principleModal')
    if (!modal) {
        return
    }
    modal.classList.add('open')
    modal.setAttribute('aria-hidden', 'false')
}

function closePrincipleModal() {
    const modal = document.getElementById('principleModal')
    if (!modal) {
        return
    }
    modal.classList.remove('open')
    modal.setAttribute('aria-hidden', 'true')
}

function launchPrincipleDemo(name) {
    const config = principleRoutes[name]
    if (!config) {
        return
    }
    demoState.name = name
    demoState.index = 0
    localStorage.setItem(app.demoKey, name)
    closePrincipleModal()
    window.location.href = `${config.page}?demo=${encodeURIComponent(name)}`
}

function clearDemoOverlay() {
    document.querySelectorAll('.demo-focus').forEach(node => node.classList.remove('demo-focus'))
    const overlay = document.getElementById('demoOverlay')
    if (overlay) {
        overlay.remove()
    }
}

function createCallout(item, target, overlay) {
    const rect = target.getBoundingClientRect()
    const callout = document.createElement('div')
    callout.className = `demo-callout ${item.placement || 'right'}`
    callout.innerHTML = `<strong>${item.title}</strong><span>${item.text}</span>`
    overlay.appendChild(callout)

    const pad = 20
    const topScroll = window.scrollY
    const leftScroll = window.scrollX
    const width = callout.offsetWidth
    const height = callout.offsetHeight
    let top = rect.top + topScroll
    let left = rect.left + leftScroll

    if ((item.placement || 'right') === 'right') {
        top += Math.max(0, rect.height / 2 - height / 2)
        left += rect.width + 24
    }
    if ((item.placement || 'right') === 'left') {
        top += Math.max(0, rect.height / 2 - height / 2)
        left -= width + 24
    }
    if ((item.placement || 'right') === 'bottom') {
        top += rect.height + 24
        left += Math.max(0, rect.width / 2 - width / 2)
    }
    if ((item.placement || 'right') === 'top') {
        top -= height + 24
        left += Math.max(0, rect.width / 2 - width / 2)
    }

    callout.style.top = `${Math.max(16, top)}px`
    callout.style.left = `${Math.max(16, left)}px`
}

function runPrincipleDemo() {
    const params = new URLSearchParams(window.location.search)
    const name = params.get('demo') || localStorage.getItem(app.demoKey)
    const config = principleRoutes[name]
    if (!config) {
        updateFloatingDemoTools()
        return
    }
    const page = window.location.pathname.split('/').pop() || 'index.html'
    if (page !== config.page) {
        updateFloatingDemoTools()
        return
    }

    demoState.name = name
    demoState.index = Math.max(0, Math.min(demoState.index || 0, config.targets.length - 1))
    renderDemoStep(config)

    if (window.history && params.get('demo')) {
        params.delete('demo')
        const clean = window.location.pathname + (params.toString() ? '?' + params.toString() : '')
        window.history.replaceState({}, '', clean)
    }
}

function saveSettingsFromForm(form) {
    write(app.settingsKey, {
        language: form.language.value,
        fontSize: form.fontSize.value,
        contrast: form.contrast.checked,
        reduceMotion: form.reduceMotion.checked,
        simpleMode: form.simpleMode.checked,
        showNotes: form.showNotes ? form.showNotes.checked : false
    })
    applySettings()
    bindText()
    showToast('Settings saved')
    return false
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn')
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'))
            tab.classList.add('active')
            loadDashboardPage(tab.dataset.filter)
        })
    })
}

function boot() {
    setDefaultData()
    applySettings()
    bindText()

    const loginForm = document.getElementById('loginForm')
    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault()
            login(loginForm.email.value.trim(), loginForm.password.value)
        })
    }

    const signupForm = document.getElementById('signupForm')
    if (signupForm) {
        signupForm.addEventListener('submit', e => {
            e.preventDefault()
            if (signupForm.password.value !== signupForm.confirmPassword.value) {
                showToast('Passwords do not match')
                return
            }
            signup(signupForm.name.value.trim(), signupForm.email.value.trim(), signupForm.password.value)
        })
    }

    const forgotForm = document.getElementById('forgotForm')
    if (forgotForm) {
        forgotForm.addEventListener('submit', e => {
            e.preventDefault()
            showToast(t('resetSent'))
        })
    }

    const addForm = document.getElementById('taskForm')
    if (addForm) {
        addForm.addEventListener('submit', e => {
            e.preventDefault()
            submitAddTask(addForm)
        })
    }

    const settingsForm = document.getElementById('settingsForm')
    if (settingsForm) {
        settingsForm.addEventListener('submit', e => {
            e.preventDefault()
            saveSettingsFromForm(settingsForm)
        })
    }

    const showNotes = document.getElementById('showNotes')
    if (showNotes) {
        showNotes.addEventListener('change', syncDemoTools)
    }

    const openPrincipleMap = document.getElementById('openPrincipleMap')
    if (openPrincipleMap) {
        openPrincipleMap.addEventListener('click', openPrincipleModal)
    }

    ensureFloatingDemoTools()

    document.querySelectorAll('[data-close-demo]').forEach(node => {
        node.addEventListener('click', closePrincipleModal)
    })

    document.querySelectorAll('.principle-item').forEach(node => {
        node.addEventListener('click', () => launchPrincipleDemo(node.dataset.principle))
    })

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (currentDemoName()) {
                exitPrincipleDemo()
            }
            closePrincipleModal()
        }
        if (e.key === 'ArrowRight') {
            stepPrincipleDemo(1)
        }
        if (e.key === 'ArrowLeft') {
            stepPrincipleDemo(-1)
        }
    })

    document.querySelectorAll('[data-logout]').forEach(node => {
        node.addEventListener('click', e => {
            e.preventDefault()
            logout()
        })
    })

    if (document.body.dataset.page === 'dashboard') {
        requireLogin()
        setupTabs()
        loadDashboardPage('all')
    }

    if (document.body.dataset.page === 'add-task') {
        requireLogin()
    }

    if (document.body.dataset.page === 'progress') {
        requireLogin()
        loadProgressPage()
    }

    if (document.body.dataset.page === 'settings') {
        requireLogin()
        loadSettingsPage()
    }

    runPrincipleDemo()
}

document.addEventListener('DOMContentLoaded', boot)
