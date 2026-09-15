// Sample Messages Data
const messagesData = [
    {
        id: 1,
        sender: 'Sarah Johnson',
        avatar: '👩',
        text: 'Hey! How are you doing? 😊',
        time: '2 minutes ago',
        status: 'read'
    },
    {
        id: 2,
        sender: 'Mike Chen',
        avatar: '👨',
        text: 'Just finished the project! Check your email for details.',
        time: '15 minutes ago',
        status: 'read'
    },
    {
        id: 3,
        sender: 'Emma Wilson',
        avatar: '👩',
        text: 'Coffee tomorrow at 3? ☕',
        time: '1 hour ago',
        status: 'unread'
    },
    {
        id: 4,
        sender: 'David Lee',
        avatar: '👨',
        text: 'The meeting was rescheduled to Friday.',
        time: '2 hours ago',
        status: 'read'
    },
    {
        id: 5,
        sender: 'Lisa Anderson',
        avatar: '👩',
        text: 'Love the new design! 🎨',
        time: '3 hours ago',
        status: 'delivered'
    },
    {
        id: 6,
        sender: 'James Brown',
        avatar: '👨',
        text: 'See you at the gym later!',
        time: '4 hours ago',
        status: 'read'
    }
];

// Sample Stories Data
const storiesData = [
    {
        id: 1,
        user: 'Sarah Johnson',
        avatar: '👩',
        text: 'Had an amazing day at the beach! 🏖️',
        time: '2 hours ago',
        views: 148,
        image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        reactions: ['❤️', '😍', '🔥']
    },
    {
        id: 2,
        user: 'Mike Chen',
        avatar: '👨',
        text: 'New office setup is ready! 💻',
        time: '4 hours ago',
        views: 256,
        image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        reactions: ['👍', '😎', '💯']
    },
    {
        id: 3,
        user: 'Emma Wilson',
        avatar: '👩',
        text: 'Just finished my morning yoga session 🧘',
        time: '6 hours ago',
        views: 89,
        image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        reactions: ['💪', '🌟', '✨']
    },
    {
        id: 4,
        user: 'David Lee',
        avatar: '👨',
        text: 'Road trip day 1! Where should we stop? 🚗',
        time: '8 hours ago',
        views: 312,
        image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        reactions: ['🎉', '🚗', '😄']
    },
    {
        id: 5,
        user: 'Lisa Anderson',
        avatar: '👩',
        text: 'Cooking something delicious 🍝',
        time: '10 hours ago',
        views: 175,
        image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        reactions: ['😋', '🍴', '👨‍🍳']
    },
    {
        id: 6,
        user: 'James Brown',
        avatar: '👨',
        text: 'Gaming night with the squad! 🎮',
        time: '12 hours ago',
        views: 201,
        image: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
        reactions: ['🎮', '🏆', '🤘']
    }
];

// Render Messages
function renderMessages() {
    const messagesGrid = document.querySelector('.messages-grid');
    
    if (messagesData.length === 0) {
        messagesGrid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">💬</div><div class="empty-state-text">No messages yet</div></div>';
        return;
    }

    messagesGrid.innerHTML = messagesData.map(msg => `
        <div class="message-card" onclick="viewMessage(${msg.id})">
            <div class="message-header">
                <div class="message-avatar">${msg.avatar}</div>
                <div class="message-info">
                    <div class="message-sender">${msg.sender}</div>
                    <div class="message-time">${msg.time}</div>
                </div>
            </div>
            <div class="message-text">${msg.text}</div>
            <span class="message-status status-${msg.status}">
                ${msg.status.charAt(0).toUpperCase() + msg.status.slice(1)}
            </span>
        </div>
    `).join('');
}

// Render Stories
function renderStories() {
    const storiesGrid = document.querySelector('.stories-grid');
    
    if (storiesData.length === 0) {
        storiesGrid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📖</div><div class="empty-state-text">No stories yet</div></div>';
        return;
    }

    storiesGrid.innerHTML = storiesData.map(story => `
        <div class="story-card" onclick="viewStory(${story.id})">
            <div class="story-image" style="background: ${story.image}"></div>
            <div class="story-overlay"></div>
            <div class="story-content">
                <div class="story-header">
                    <div class="story-avatar">${story.avatar}</div>
                    <div>
                        <div class="story-user">${story.user}</div>
                        <div class="story-time">${story.time}</div>
                    </div>
                </div>
                <div>
                    <div class="story-text">${story.text}</div>
                    <div class="story-footer">
                        <div class="story-views">👁️ ${story.views} views</div>
                        <div class="story-reactions">
                            ${story.reactions.map(r => `<span class="reaction">${r}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Tab Navigation
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabName = button.getAttribute('data-tab');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// View Message Detail
function viewMessage(id) {
    const message = messagesData.find(m => m.id === id);
    alert(`Message from ${message.sender}:\n\n${message.text}`);
}

// View Story Detail
function viewStory(id) {
    const story = storiesData.find(s => s.id === id);
    alert(`Story by ${story.user}:\n\n${story.text}\n\n👁️ ${story.views} views`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderMessages();
    renderStories();
    setupTabs();
});