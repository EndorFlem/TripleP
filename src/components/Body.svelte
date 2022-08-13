<script>
  import Info from "./Info.svelte";
  import Education from "./Education.svelte";
  import DomesticProduct from "./DomesticProduct.svelte";
  import Demo from "./DemoSection.svelte";
</script>

<body-content class="body">
  <Info />
  <Education />
  <DomesticProduct />
  <Demo />
</body-content>

<style>
  body-content {
    color: lightgray;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
  }
</style>
