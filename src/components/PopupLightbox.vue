<template>
  <article class="PopupLightbox">
    <section class="PopupLightbox__header">
      <span id="close"  @click="$parent.$emit('close')"><img id="x" src="../assets/x.png" alt=""></span>
    </section>
    <section class="PopupLightbox__content">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  name: 'PopupLightbox'
}
</script>

<style>
#x{
  max-width: 2.5vw;
  max-height: 2.5vw;
  z-index: 100000000;
  margin-top: 5vw;
}
#close{
  display: flex;
  flex-direction: row-reverse;
  align-items:flex-end;
}
.PopupLightbox {
  max-width: 100%;
  max-height: 100%;
}

.PopupLightbox__header {
  text-align: right;
}

.PopupLightbox__content {
  margin-top: 0.5em;
  margin-bottom: 1em;
}
@media  screen and (max-width:768px)  {
#x{
  max-width: 4vw;
  max-height: 4vw;
  z-index: 100000000;
  margin-top: 50px;
}
}
@media  screen and (max-width:425px)  {
#x{
  max-width: 6vw;
  max-height: 6vw;
  z-index: 100000000;
  margin-top: 50px;
}
}
</style>
