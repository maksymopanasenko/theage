function tabs() {
    $('ul.tab-list').on('click', 'li:not(.tab-item_active)', function() {
        $(this)
          .addClass('tab-item_active').siblings().removeClass('tab-item_active')
          .closest('div.tab').find('div.dinosaurs__wrapper').toggleClass('wrapper_active');
    });
}

export default tabs;