// Palette
import palette from "../palette";

export default {
  outlined: {
    backgroundColor: palette.common.white,
    "&:hover": {
      backgroundColor: palette.danger.main
    }
  },
  contained: {
    backgroundColor: palette.common.white,
    "&:hover": {
      backgroundColor: palette.common.neutral
    }
  }
};
