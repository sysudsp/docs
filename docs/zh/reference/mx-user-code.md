# 用户代码区域

请注意，使用 STM32CubeMX 生成初始代码时，如果需要修改自动生成的文件，请务必将自己编写的代码放置在成对的 `/* USER CODE BEGIN XXX */` 和 `/* USER CODE END XXX */` 之间，否则代码有丢失风险！

以下是一个示例，高亮的区域即为用户代码区域。

```c title="main.c" {3-5,14-21,23-25}
// ......

/* USER CODE BEGIN Includes */
#include <stdbool.h>
/* USER CODE END Includes */

// ......

int main(void)
{
  // ......

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_RESET);
    HAL_Delay(1000);
    HAL_GPIO_WritePin(GPIOC, GPIO_PIN_13, GPIO_PIN_SET);
    HAL_Delay(1000);
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
  }
  /* USER CODE END 3 */
}

// ......
```
