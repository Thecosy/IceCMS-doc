---
id: vuex
title: VUEX Development Tutorial
sidebar_label: VUEX Development Tutorial
---

# VUEX Development Tutorial

Why do I want to make this collection of articles? There are so many tutorials about vuex on the market, and some great masters have even packaged vuex into a fancy way. On the one hand, I want to show you how to use vuex from the simplest and most basic point, and on the other hand, I also want to review vuex myself. Okay, without further ado, let's briefly introduce vuex. What exactly is it?

The first step is, if you want to understand a technology, go to its official website to see it, that's right, enter the official website, what comes into view is "What is vuex":

![](/img/icecms/202307/12.jpg)

As shown in the figure, it is a **state management mode** in a program. It is a small warehouse that **centrally** stores the status of **all** components and keeps the status we store changing in a **predictable** way. I will not explain more about predictability now. I believe that after reading this article, you will have your own understanding.

# The first step is to understand Vuex

### 🤯 Imagine a scenario

If your project has many pages (components/views) and there are multiple levels of nested relationships between the pages, then if these pages need to share a state, the following two problems will arise:

- Multiple views rely on the same state
- Actions from different views need to modify the same state

### 🤪 Use your brain and you will come up with solutions to the above problems:

- For the first problem, if it is a multi-level nested relationship, you can use parent-child component parameter passing to solve it. Although it is a bit troublesome, it can be solved at least. For brother components or components with more complex relationships, it is very difficult to deal with. Although it can be solved by various methods, it is really not elegant, and when the project becomes bigger, the code will become a pile of shit, which is really annoying.
- For the second question, you can directly reference parent-child components, or use events to change or synchronize multiple copies of the state. This model is very fragile, often making the code difficult to maintain, and also turning the code into a shit mountain.

### 😇 Now that we have thought about this, what if we change our thinking:

- Extract the same state that each component needs to depend on, and manage it globally using the singleton pattern.
- In this mode, any component can directly access the state, or all components are updated when the state changes.

### 👶 At this time, Vuex was born!

This is the basic idea behind Vuex, which draws on Flux and Redux. Unlike other modes, Vuex is a state management library designed specifically for Vue to utilize Vue.js's fine-grained data response mechanism for efficient state updates.

### 😨 Then, you will see the following vuex usage cycle diagram on the official website (it doesn’t matter if you don’t understand it):

![](/img/icecms/202307/13.jpg)

### 🤩 When should I use vuex?

- This question varies from person to person. If you don't need to develop a large single-page application, there is no need to use vuex at this time. For example, if you only have two or three pages, and the files added after using vuex are more than your current pages, then there is no need to do it.
- If your project reaches the scale of a medium-to-large application, you will probably consider how to better manage the state outside the component, and Vuex will become a natural choice.

### 🤔 That’s all for this brief introduction to vuex. Next, let’s use it together!

# Step 2: Installation

Enter the project, enter the installation command in the command line, and press Enter

`npm install vuex --save`

Then configure vuex to make it work: create a store folder under the src path, and then create an index.js file with the following content:

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 定义一个name，以供全局使用
    name: '张三',
    // 定义一个number，以供全局使用
    number: 0,
    // 定义一个list，以供全局使用
    list: [
      { id: 1, name: '111' },
      { id: 2, name: '222' },
      { id: 3, name: '333' },
    ],
  },
});

export default store;


```

Modify main.js:

```
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'; // 引入我们前面导出的store对象

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store, // 把store对象添加到vue实例上
  components: { App },
  template: '<App/>',
});


```

Finally modify App.vue:

```
<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    // 使用this.$store.state.XXX可以直接访问到仓库中的状态
    console.log(this.$store.state.name);
  },
};
</script>


```

At this point, start the project `npm run dev` , and the value of name that we just defined in the store will be output in the console.

![](/img/icecms/202307/14.jpg)

- 🤖 Official suggestion 1: The official suggestion is that the above operation this.$store.state.XXX should be placed in a calculated property. Of course, I also recommend that you use it this way, which can make your code look more elegant, like this:

```
export default {
  mounted() {
    console.log(this.getName);
  },
  computed: {
    getName() {
      return this.$store.state.name;
    },
  },
};


```

At this time, you can get the same effect as above.

- 🤖 Official suggestion 2: Are you tired of writing this.$store.state.XXX every time? What if you really don’t want to write this? Of course, there is a solution, as follows:

```
<script>
import { mapState } from 'vuex'; // 从vuex中导入mapState
export default {
  mounted() {
    console.log(this.name);
  },
  computed: {
    ...mapState(['name']), // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
  },
};
</script>


```

You can even give it an alias when destructuring, like this:

```
...mapState({ aliasName: 'name' }),  // 赋别名的话，这里接收对象，而不是数组


```

### 🤗 At this point, the installation and initialization of vuex is complete. At this point, you can easily access the status of the warehouse anywhere in the project.

# Step 3: Understand the modifier: Getter

When you see this, it proves that you have perfectly created a vue project in the previous step and installed vuex into it!

OK! Next, let's introduce a "modification tool" for read operations --- Getter

- 🤨 Imagine a scenario where you have displayed the name in the store on many pages, and the product manager comes to you to ask for help:

- Product Manager: Add “hello” before all names!

- Me: Why?

- Product Manager: Do I need to give a reason when I raise a demand?

- Me: Okay, I’ll join!

At this time, the first thing you think of is how to add it, emm... On each page, use this.$store.state.name to get the value, traverse it, and append "hello" to the front.

🤦🏻‍♂️ Wrong! This is bad for the following reasons:

- First, if you use name on pages A, B, and C, then you have to modify it on all three pages. You have to add this method many times for multiple pages, which causes code redundancy, which is not good.
- Second, if the product manager asks you to change "hello" to "fuck" next time, you have to change all three pages again, and you can only slap yourself in the face...

👏🏻 Learning from the above lessons, you will have a new idea: we can directly operate or process the name in the store to solve the problem from the source! So how should we write it specifically? At this time, the Getter tool that will be introduced this time makes a shining debut!

🤡 How to use it? No nonsense, show code!

First, add getters to the store object

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: '张三',
    number: 0,
    list: [
      { id: 1, name: '111' },
      { id: 2, name: '222' },
      { id: 3, name: '333' },
    ],
  },
  // 在store对象中增加getters属性
  getters: {
    getMessage(state) {
      // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
      return `hello${state.name}`;
    },
  },
});

export default store;


```

Use in component:

```
export default {
  mounted() {
    // 注意不是$store.state了，而是$store.getters
    console.log(this.$store.state.name);
    console.log(this.$store.getters.getMessage);
  },
};


```

Then check the console:

![](/img/icecms/202307/15.jpg)

No problem

🤖 Official suggestion: Are you tired of writing this.$store.getters.XXX every time? What if you really don’t want to write this? Of course, there is a solution. The official suggestion is that we can use mapGetters to deconstruct into calculated properties, just like using mapState, and then we can directly use this to call, as shown below:

```
<script>
import { mapState, mapGetters } from 'vuex';
export default {
  mounted() {
    console.log(this.name);
    console.log(this.getMessage);
  },
  computed: {
    ...mapState(['name']),
    ...mapGetters(['getMessage']),
  },
};
</script>


```

At this point you can get the same effect as before.

Of course, like mapState, you can also give it an alias or nickname, like this:

```
...mapGetters({ aliasName: 'getMessage' }),  // 赋别名的话，这里接收对象，而不是数组


```

🤗 OK, when you see this, you have successfully used Getter, and you can also understand when to use getters. You can access through calculated properties (cached) or through methods (not cached). You can even call getters methods inside getters methods. Of course, you have also implemented deconstruction into calculated properties using mapGetters like state, so that you can use getters very conveniently!

😎 For reading values, we have "native read (state)" and "modified read (getters). Next, we will introduce how to modify the value!

# Step 4: Learn how to modify values: Mutation

🤗 OK! Congratulations on getting to this point. So far, we have successfully accessed the value in the store. Next, I will introduce how to modify the value in the state.

- When it comes to modifying values, some students will think of writing like this:

```
// 错误示范
this.$store.state.XXX = XXX;


```

🤪 First of all, let me make it clear here: This is wrong! This is wrong! This is wrong!

Why is the above wrong? Because this store repository is strange. You can take it at will, but you can't change it at will. Let me give you an example:

🤔 If you open WeChat Moments and see that your friend has posted a dynamic, but there is a typo in the dynamic, what will you do? Can you help him correct it? Of course not! We can only notify him to modify it, because it is someone else's Moments, you have no right to operate, only he can operate it. Similarly, in vuex, we cannot directly modify the value in the warehouse, we must use vuex's own method to modify it. At this time, Mutation makes a shining debut!

😬 After explaining the problem clearly, we are ready to complete an effect: we first output the default value 0 of number in state, and then we change the default value 0 of number to the value we want to modify by submitting mutations in the vue component, and then output it, so that we can simply practice how to use mutations. No more nonsense, on to the code.

- Modify store/index.js

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: '张三',
    number: 0,
  },
  mutations: {
    // 增加nutations属性
    setNumber(state) {
      // 增加一个mutations的方法，方法的作用是让num从0变成5，state是必须默认参数
      state.number = 5;
    },
  },
});

export default store;


```

- Modify App.vue

```
<script>
export default {
  mounted() {
    console.log(`旧值：${this.$store.state.number}`);
    this.$store.commit('setNumber');
    console.log(`新值：${this.$store.state.number}`);
  },
};
</script>


```

- Run the project and check the console:

![](/img/icecms/202307/16.png.jpeg)

- 🤡 The above is a simple method to implement mutations, which does not pass parameters. What if we want to pass non-fixed parameters? Next, we will teach you how to solve it.

- Modify store/index.js

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: '张三',
    number: 0,
  },
  mutations: {
    setNumber(state) {
      state.number = 5;
    },
    setNumberIsWhat(state, number) {
      // 增加一个带参数的mutations方法
      state.number = number;
    },
  },
});

export default store;


```

- Modify App.vue

```
<script>
export default {
  mounted() {
    console.log(`旧值：${this.$store.state.number}`);
    this.$store.commit('setNumberIsWhat', 666);
    console.log(`新值：${this.$store.state.number}`);
  },
};
</script>


```

- Run the project and check the console:

![](/img/icecms/202307/17.png.jpeg)

No problem!

- Note: Although the above method of passing parameters can achieve the purpose, it is not recommended. The official recommendation is to pass an object in, which looks more beautiful. You can name the object as you like, but we usually name it payload. The code is as follows:

- Modify store/index.js

```
mutations: {
    setNumber(state) {
      state.number = 5;
    },
    setNumberIsWhat(state, payload) {
      // 增加一个带参数的mutations方法，并且官方建议payload为一个对象
      state.number = payload.number;
    },
  },


```

- Modify App.vue

```
<script>
export default {
  mounted() {
    console.log(`旧值：${this.$store.state.number}`);
    this.$store.commit('setNumberIsWhat', { number: 666 }); // 调用的时候也需要传递一个对象
    console.log(`新值：${this.$store.state.number}`);
  },
};
</script>


```

- Now you can get the same effect as before, and the code is more beautiful!

`😱 这里说一条重要原则：Mutations里面的函数必须是同步操作，不能包含异步操作！（别急，后面会讲到异步）`

`😱 这里说一条重要原则：Mutations里面的函数必须是同步操作，不能包含异步操作！（别急，后面会讲到异步）`

`😱 这里说一条重要原则：Mutations里面的函数必须是同步操作，不能包含异步操作！（别急，后面会讲到异步）`

Okay, remember this important principle, let's talk about a little trick:

- 🤖 Official suggestion: Just like the initial mapState and mapGetters, we can use mapMutations in components instead of this.$store.commit('XXX'). Isn't it convenient?

```
<script>
import { mapMutations } from 'vuex';
export default {
  mounted() {
    this.setNumberIsWhat({ number: 999 });
  },
  methods: {
    // 注意，mapMutations是解构到methods里面的，而不是计算属性了
    ...mapMutations(['setNumberIsWhat']),
  },
};
</script>


```

- Now you can get the same effect as before, and the code is a little more beautiful!

- Of course you can also give it an alias or nickname, like this:

```
methods: {
  ...mapMutations({ setNumberIsAlias: 'setNumberIsWhat' }), // 赋别名的话，这里接收对象，而不是数组
},


```

- 🤔 OK, that’s about it for the introduction to Mutation. In addition, you have also mastered how to write with or without parameters when defining mutation methods. And you have listened to the official advice and used mapMutations to deconstruct into the methods inside your component, so that you can easily use mutation methods!

- 🤪 As mentioned above, Mutations can only perform synchronous operations, so let’s start the next section right away to see what we should pay attention to when using Actions for asynchronous operations!

# Step 5: Understand asynchronous operations: Actions

😆 OK! In this section, we will learn to use Actions. The purpose of Actions is to assume that you have asynchronous operations when modifying the state. The author of Vuex does not want you to put asynchronous operations in Mutations, so he set up an area for you to put asynchronous operations. This is Actions.

😛 Let's go straight to the code

- Modify store/index.js

```
const store = new Vuex.Store({
  state: {
    name: '张三',
    number: 0,
  },
  mutations: {
    setNumberIsWhat(state, payload) {
      state.number = payload.number;
    },
  },
  actions: {
    // 增加actions属性
    setNum(content) {
      // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
      return new Promise(resolve => {
        // 我们模拟一个异步操作，1秒后修改number为888
        setTimeout(() => {
          content.commit('setNumberIsWhat', { number: 888 });
          resolve();
        }, 1000);
      });
    },
  },
});


```

- Modify App.vue

```
async mounted() {
  console.log(`旧值：${this.$store.state.number}`);
  await this.$store.dispatch('setNum');
  console.log(`新值：${this.$store.state.number}`);
},


```

- Run the project and check the console:

![](/img/icecms/202307/18.png.jpeg)

🤓 After reading the example, do you understand that action is used to submit mutations? All asynchronous operations are digested in action, and finally the mutation is submitted.

😼 Of course, you can imitate mutation to pass parameters, like this:

- Modify store/index.js

```
actions: {
  setNum(content, payload) {
    // 增加payload参数
    return new Promise(resolve => {
      setTimeout(() => {
        content.commit('setNumberIsWhat', { number: payload.number });
        resolve();
      }, 1000);
    });
  },
},


```

- Modify App.vue

```
async mounted() {
  console.log(`旧值：${this.$store.state.number}`);
  await this.$store.dispatch('setNum', { number: 611 });
  console.log(`新值：${this.$store.state.number}`);
},


```

- Run the project and view the console

![](/img/icecms/202307/19.png.jpeg)

No problem!

- 🤖 Official suggestion 1: If you don't want to always use this.$store.dispatch('XXX') to call actions, you can use mapActions to deconstruct related actions into methods and call them directly with this:

```
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['setNum']), // 就像这样，解构到methods中
  },
  async mounted() {
    await this.setNum({ number: 123 }); // 直接这样调用即可
  },
};
</script>


```

Of course, you can also give it an alias or nickname, like this:

```
...mapActions({ setNumAlias: 'setNum' }),   // 赋别名的话，这里接收对象，而不是数组


```

- 🤖 Official suggestion 2: In actions in store/index.js, the method parameters can directly deconstruct commit, which can facilitate subsequent operations:

```
actions: {
  setNum({ commit }) {
    // 直接将content结构掉，解构出commit，下面就可以直接调用了
    return new Promise(resolve => {
      setTimeout(() => {
        commit('XXXX'); // 直接调用
        resolve();
      }, 1000);
    });
  },
},


```

- 🤠 OK, after reading this, you should understand the position of action in vuex. You must have your own judgment on when to use action and when not to use it. The most important judgment condition is whether the operation I want to do is asynchronous, which is also the essence of the existence of action. Of course, you should not confuse action with mutation. Action is actually the parent level of mutation. After processing some asynchronous operations in action, the subsequent modification of state is left to mutation.

# Step 6: Split by attributes

🤯 Next, let's imagine that the content of store/index.js we introduced so far is very small. If you are a slightly larger project, you will get an index.js with hundreds or thousands of lines, and it will be very difficult to find something. We recommend that the number of lines in your file should not exceed 200, otherwise it will not be good for debugging. Now that the problem has come up, let's see how to split it up.

🤒 We can see that a store/index.js contains roughly four properties: state/getters/mutations/actions. We can be thorough and keep this framework in index.js and spread the contents to other files.

![](/img/icecms/202307/20.png)

So we can split it like this:

Create four new files, namely `state.js` `getters.js` `mutations.js` `actions.js` :

![](/img/icecms/202307/21.png)

- 1. Remove `state` and put it in `state.js` :

```
// state.js

export const state = {
  name: '张三',
  number: 0,
  list: [
    { id: 1, name: '111' },
    { id: 2, name: '222' },
    { id: 3, name: '333' },
  ],
};


```

- 1. Remove `getters` and put them in `getters.js` :

```
// getters.js

export const getters = {
  getMessage(state) {
    return `hello${state.name}`;
  },
};


```

- 1. Separate `mutations` and put them in `mutations.js` :

```
// mutations.js

export const mutations = {
  setNumber(state) {
    state.number = 5;
  },
};


```

- 1. Remove `actions` and put them in `actions.js` :

```
// actions.js

export const actions = {
  setNum(content) {
    return new Promise(resolve => {
      setTimeout(() => {
        content.commit('setNumberIsWhat', { number: 888 });
        resolve();
      }, 1000);
    });
  },
};


```

1. Assemble into the main file:

```
import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state'; // 引入 state
import { getters } from './getters'; // 引入 getters
import { mutations } from './mutations'; // 引入 mutations
import { actions } from './actions'; // 引入 actions

Vue.use(Vuex);

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

// 可以简写成下面这样：

// const store = new Vuex.Store({ state, getters, mutations, actions });

export default store;


```

🤓 The above is a simple split of the store code by attributes. This makes it clearer. You can add whatever you need. Everyone does their own work without affecting each other.

Of course, you don't have to do this at all. To quote a sentence from the official documentation, " **This can be very helpful in large projects that require multi-person collaboration. But if you don't like it, you don't have to do it at all** ."

# Step 7: Split by function - Module

😜 Above we introduced how to split the project. We split it by **attributes** , splitting getters/actions/mutations and other attributes into different files.

Next, let's introduce another dimension to split our store, 'by **function** '. If we split by function, it is our title **Module** .

🤖 Let's first take a look at how the official documentation introduces Module:

![](/img/icecms/202307/22.png)

- After reading the description in the figure, you may have distinguished the differences and similarities between **the module splitting by function** used here and **the splitting by attribute** we introduced last time; just like the scenario in the figure, we have a main store, in which we add two different stores according to different functions, and each store maintains its own state and its own actions/mutations/getters.

- 🤡 Let’s stop talking nonsense and implement it with code

- 1. We add a new warehouse store2 on the previous store. The main code is as follows:

```
// store2.js

const store2 = {
  state: {
    name: '我是store2',
  },
  mutations: {},
  getters: {},
  actions: {},
};

export default store2;


```

- 1. Then introduce our newly created store2 module in the store:

```
import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import store2 from './store2'; // 引入store2模块

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { store2 }, // 把store2模块挂载到store里面
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

export default store;


```

- 1. Access state - We test access to the name in the state of the store2 module in App.vue, and the results are as follows:

```
<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.store2.name); // 访问store2里面的name属性
  },
};
</script>


```

We can see how to access the state or **root state** **in the module** in different properties through the following code:

```
mutations: {
  changeName(state, payload) {
    // state 局部状态
    console.log(state);
    console.log(payload.where);
  },
},
getters: {
  testGetters(state, getters, rootState) {
    // state 局部状态
    console.log(state);
    // 局部 getters,
    console.log(getters);
    // rootState 根节点状态
    console.log(rootState);
  },
},
actions: {
  increment({ state, commit, rootState }) {
    // state 局部状态
    console.log(state);
    // rootState 根节点状态
    console.log(rootState);
  },
},


```

The above is a brief introduction to the module. In fact, this is a kind of thought, divide and conquer, split the complex, and manage it more effectively.

In fact, the above is not all about modules. There are some other methods such as`命名空间`,`模块注册全局action` ,`带命名空间的绑定函数`,`模块动态注册`,`模块重用`, etc. which are not introduced here. If you use them in your project, you can check them out. Sometimes you don’t need to fully understand them. Just know that they exist and where to look for information when problems arise. 😊

# Step 8. Summary

🤗 OK! That’s the general explanation of vuex. You must be familiar with vuex now. You can install it, configure it, read the value of state, and even modify it (Getter). Then you can modify the value inside (Mutation). If you have asynchronous operations and need to modify the state, you have to use Action. In this way, you can use vuex in your project! Come on! 🤔
