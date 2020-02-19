<template>
  <div id="loading-viewport">
    <div>
      <div id="loader"></div>
    </div>
    <h1>Please Wait...</h1>
  </div>
</template>

<style scoped>

#loading-viewport{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: fixed;
  animation: go-away 3s;
}

#loader{
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: auto;
  border-bottom: 1rem solid #c7ceb6;
  border-top: 1rem solid #2cb34a;
  border-left: 1rem solid #63ff86;
  border-right: 1rem solid #175f17;
  -webkit-animation: glowing 1s infinite;
  animation: glowing 1s infinite;
}

h1 {
  text-align: center;
  margin-top: 2rem;
  color: #c7ceb6;
  font-style: italic;
  animation: came-in 1s infinite;
}

@keyframes go-away {
  0%{
    opacity: 1;
  }
  75%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

@keyframes glowing {
  0%{
    transform: rotate(0deg);
    box-shadow: 0rem 0rem 1rem #63ff86;
  }
  50%{
    transform: rotate(360deg);
    box-shadow: 0rem 0rem 5rem #63ff86;
  }
  100% {
    transform: rotate(720deg);
    box-shadow: 0rem 0rem 1rem #63ff86;
  }
}

@keyframes came-in {
  0% {
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}

</style>
