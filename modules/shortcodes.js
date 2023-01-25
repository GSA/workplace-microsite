module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("feature", (headingText, actionText, actionUrl, imageUrl) => {
    const filteredImageUrl = eleventyConfig.getFilter("url")(imageUrl);
    const filteredActionUrl = eleventyConfig.getFilter("url")(actionUrl);
    return `<section class="usa-hero padding-y-8" style="background-image: url(${filteredImageUrl})">
              <div class="grid-container">
                <h1 class="usa-hero__heading grid-col-8">
                  <span class="usa-hero__heading--alt">${headingText}</span>
                </h1>
                <a class="usa-button" href="${filteredActionUrl}">${actionText}</a>
              </div>
            </section>`;
  });

  eleventyConfig.addPairedShortcode("iconList", (content) => {
    return `<ul class="usa-icon-list">${content}</ul>`;
  });

  eleventyConfig.addShortcode("iconListItem", (classes, icon, text) => {
    const iconUrl = eleventyConfig.getFilter("url")(`/assets/uswds/img/sprite.svg#${icon}`);
    return `<li class="usa-icon-list__item">
              <div class="usa-icon-list__icon ${classes}">
                <svg class="usa-icon" aria-hidden="true" role="img">
                  <use xlink:href="${iconUrl}"></use>
                </svg>
              </div>
              <div class="usa-icon-list__content">
                ${text}
              </div>
            </li>`;
  });

  eleventyConfig.addShortcode("banner", (imageUrl, imageAlt) => {
    const filteredImageUrl = eleventyConfig.getFilter("url")(imageUrl);
    return `<img src="${filteredImageUrl}" alt="${imageAlt}" class="width-full maxh-card-lg" style="object-fit: cover;">`;
  });

  eleventyConfig.addPairedShortcode("miniGallery", (content) => {
    return `<div class="grid-row grid-gap">${content}</div>`;
  });

  eleventyConfig.addPairedShortcode("miniGalleryItem", (content, args) => {
    const { src, alt, link } = args;
    const filteredImageUrl = eleventyConfig.getFilter("url")(src);
    let html = `<div class="tablet:grid-col-4">`;
    html += `<div>`;
    html += link ? `<a href="${src}">` : "";
    html += `<img src="${filteredImageUrl}" alt="${alt}" class="add-aspect-4x3">`;
    html += link ? `</a>` : "";
    html += content ? `<div>${content}</div>` : "";
    html += `</div>`;
    html += `</div>`;
    return html;
  });
};
