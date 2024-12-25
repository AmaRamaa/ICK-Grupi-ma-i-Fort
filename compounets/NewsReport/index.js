class customnews extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const stylesheetRoot = this.getAttribute('stylesheetRoot')
        const topImg = this.getAttribute('topImg')
        const profileImg = this.getAttribute('profileImg')
        const profileName = this.getAttribute('profileName')
        const cardTitle = this.getAttribute('cardTitle')
        const dateTime = this.getAttribute('dateTime')
        this.innerHTML = `
        <link rel="stylesheet" href="${stylesheetRoot}">
        <div class="news-card">
        <div class="card-image-container">
            <img src="${topImg}"
                alt="${cardTitle}" class="card-image">
            <span class="date-badge">${dateTime}</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">${cardTitle}</h3>
            <div class="author-info">
                <img src="${profileImg}"
                    alt="${profileName}" class="author-image">
                <span class="author-name">${profileName}</span>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('custom-news', customnews)