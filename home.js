// ── ARVISIONARY STUDIO — ALL ETSY LINKS ──
// To update any link, change it here once.
// It will automatically update everywhere on the site.

const LINKS = {
  shop:           'https://www.etsy.com/shop/arvisionarystudio',
  BE_STILL:       'https://www.etsy.com/listing/4470605733',
  ROOTED:         'https://www.etsy.com/listing/4470236052',
  GOD_WITHIN_HER: 'https://www.etsy.com/listing/4469545507',
  BY_HIS_GRACE:   'https://www.etsy.com/listing/4469527722',
  GRACE_UPON:     'https://www.etsy.com/listing/4469517176',
  FAITH_BLOOM:    'https://www.etsy.com/listing/4464247400',
  MADE_NEW:       'https://www.etsy.com/listing/4463709261',
  BREATHING:      'https://www.etsy.com/listing/4458312237',
  FAITH_FEAR:     'https://www.etsy.com/listing/4457536317',
  FLORAL_CROSS:   'https://www.etsy.com/listing/4464254422',
};

// ── INJECT ALL ETSY LINKS INTO THE PAGE ──
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-etsy]').forEach(function(el) {
    const key = el.dataset.etsy;
    if (LINKS[key]) {
      el.href = LINKS[key];
    }
  });
});
