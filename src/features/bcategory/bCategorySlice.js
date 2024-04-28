import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { blogCategoryService } from "./bCategoryService";

const initialState = {
    categories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const getCategories = createAsyncThunk(
    "category/get-categories",
    async (thunkAPI) => {
        try {
            return await blogCategoryService.getCategories();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const createNewblogCat = createAsyncThunk(
    "blogCategory/create-category",
    async (catData, thunkAPI) => {
      try {
        return await blogCategoryService.createBlogCategory(catData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  export const getABlogCat = createAsyncThunk(
    "blogCategory/get-category",
    async (id, thunkAPI) => {
      try {
        return await blogCategoryService.getBlogCategory(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  export const updateABlogCat = createAsyncThunk(
    "blogCategory/update-category",
    async (blogCat, thunkAPI) => {
      try {
        return await blogCategoryService.updateBlogCategory(blogCat);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  export const deleteABlogCat = createAsyncThunk(
    "blogCategory/delete-category",
    async (id, thunkAPI) => {
      try {
        return await blogCategoryService.deleteBlogCategory(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const resetState = createAction("Reset_all");

const blogCategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.categories = action.payload;
            state.message = "success";
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(createNewblogCat.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(createNewblogCat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createBlogCategory = action.payload;
          })
          .addCase(createNewblogCat.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
          .addCase(getABlogCat.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getABlogCat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blogCatName = action.payload?.title;
          })
          .addCase(getABlogCat.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
          .addCase(updateABlogCat.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updateABlogCat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.updatedBlogCategory = action.payload;
          })
          .addCase(updateABlogCat.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
          .addCase(deleteABlogCat.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(deleteABlogCat.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.deletedBlogCategory = action.payload;
          })
          .addCase(deleteABlogCat.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
          .addCase(resetState, () => initialState);
    }
});

export default blogCategorySlice.reducer