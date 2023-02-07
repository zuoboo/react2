import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { RepeatClockIcon as ResetIcon } from '@chakra-ui/icons';
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

type Props = { maxCount?: number };
const MAX_COUNT = 60;

const Timer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  const tick = () => setTimeLeft((t) => t - 1);
  const reset = () => setTimeLeft(maxCount);

  useEffect(() => {
    // setIntervalにtick関数を渡している(ミリ秒ごとにtickが実行されるように登録)
    const timerId = setInterval(tick, 1000);

    // クリーンアップ関数を返す(コンポーネントがアンマウントされる際にインターバル実行を終了させるためのもの)
    return () => clearInterval(timerId);
    // 第二引数[]は、空配列を渡しているので、インターバル実行の開始処理は初回マウント時にのみ実行
  }, []);

  // 依存配列が渡されていないので、レンダリングのたびに実行
  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, maxCount]);

  return (
    <Box p={5} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Stat mb={2}>
        <StatLabel fontSize={18}>Count</StatLabel>
        <StatNumber fontSize={42}>{timeLeft}</StatNumber>
      </Stat>
      <Button
        w="xs"
        colorScheme="red"
        variant="solid"
        leftIcon={<ResetIcon />}
        onClick={reset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Timer;
