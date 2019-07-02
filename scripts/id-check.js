$(document).ready(function() {
  $('[id]').each(function() {
    let ids = $('[id="'+this.id+'"]');

    if (ids.length > 1 && ids[0] == this) {console.warn('Multiple IDs #'+this.id);}
  });
});
