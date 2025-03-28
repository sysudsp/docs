# STM32 的编程方式

首先可以大致分为使用汇编语言编程和使用高级语言编程，在本课程中我们使用高级语言中的 C 语言编程，其中又可以分为寄存器编程和库函数编程。

## 标准 C 语言

我们假设同学们对标准 C 语言有一定了解，如果没有，以下是一些参考资料示例。

- cppreference.com 上的 [C 参考手册](https://zh.cppreference.com/w/c) 和 [符号索引](https://zh.cppreference.com/w/c/symbol_index)
- 菜鸟教程上的 [C 语言教程](https://www.runoob.com/cprogramming/c-tutorial.html)
- [C 语言备忘清单](https://wangchujiang.com/reference/docs/c.html)

## 寄存器编程

寄存器编程就是直接操作 STM32 的寄存器来完成对 STM32 的控制，这种编程方式对硬件的了解要求较高，开发过程中需要参考实际开发芯片的[参考手册](./datasheets.md)了解芯片的功能和对应寄存器的使用方法。以下是一个例子。

```c
int main(void) {
    RCC->APB2ENR |= 1 << 2;
    GPIOA->CRL &= 0XFFF0FFFF;
    GPIOA->CRL |= 0X00030000;
    GPIOA->ODR |= 1 << 8;
    while (1) {
    }
}
```

## 库函数编程

库函数编程是通过调用库函数来完成对 STM32 的控制，这种编程方式对硬件的了解要求较低，开发过程中需要查询芯片的参考手册了解对应的功能，查询库的[用户手册](./datasheets.md)了解对应功能函数的使用方法。以下是使用 HAL 库开发的一个例子。

```c
int main(void) {
    HAL_Init();
    __HAL_RCC_GPIOA_CLK_ENABLE();
    GPIO_InitTypeDef GPIO_InitStruct;
    GPIO_InitStruct.Pin = GPIO_PIN_8;
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    HAL_GPIO_WritePin(GPIOA, GPIO_PIN_8, GPIO_PIN_SET);
    while (1) {
    }
}
```

我们把这种库叫做**驱动**。除了 HAL（硬件抽象层）库，还有 LL（底层）库和标准外设库。[标准外设库](https://www.st.com.cn/zh/embedded-software/stm32-standard-peripheral-libraries.html)是老式开发方式，使用方法大同小异。

这些库函数实际上是对寄存器操作的封装，可以查看函数的源码了解详情。以 HAL GPIO 为例，下面的代码复制自 [`stm32f1xx_hal_gpio.c`](https://github.com/STMicroelectronics/stm32f1xx-hal-driver/blob/b275dafb2260d08ee4651ebbe755111786429e60/Src/stm32f1xx_hal_gpio.c)。

```c
GPIO_PinState HAL_GPIO_ReadPin(GPIO_TypeDef *GPIOx, uint16_t GPIO_Pin)
{
  GPIO_PinState bitstatus;

  /* Check the parameters */
  assert_param(IS_GPIO_PIN(GPIO_Pin));

  if ((GPIOx->IDR & GPIO_Pin) != (uint32_t)GPIO_PIN_RESET)
  {
    bitstatus = GPIO_PIN_SET;
  }
  else
  {
    bitstatus = GPIO_PIN_RESET;
  }
  return bitstatus;
}
```

```c
void HAL_GPIO_WritePin(GPIO_TypeDef *GPIOx, uint16_t GPIO_Pin, GPIO_PinState PinState)
{
  /* Check the parameters */
  assert_param(IS_GPIO_PIN(GPIO_Pin));
  assert_param(IS_GPIO_PIN_ACTION(PinState));

  if (PinState != GPIO_PIN_RESET)
  {
    GPIOx->BSRR = GPIO_Pin;
  }
  else
  {
    GPIOx->BSRR = (uint32_t)GPIO_Pin << 16u;
  }
}
```
