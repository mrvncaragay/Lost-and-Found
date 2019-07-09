// Palette
import palette from "../palette";

export default {
  outlined: {
    backgroundColor: palette.common.white,
    color: palette.common.muted
  },
  contained: {
    backgroundColor: palette.common.white,
    "&:hover": {
      backgroundColor: palette.common.neutral
    }
  },
  label: {
    height: "14px",
    fontSize: "10px"
  }
};
