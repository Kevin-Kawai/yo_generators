class BlogsController< ApplicationController
  def index
    @blogs = Blog.all
  end

  def new
    @blog = Blog.new
  end

  def create
    blog = Blog.new(blog_params)
    if blog.save
      redirect_to action: "show", id: blog.id
    else
      render :new
    end
  end

  def edit
    @blog = Blog.find(params[:id])
  end

  def update
    blog = Blog.find(blog_params)
    if blog.save
      redirect_to action: "index"
    else
      render :edit
    end
  end

  def show
    @blog = Blog.find(params[:id])
  end

  def destroy
    @blog = Blog.find(params[:id])
    if @blog.destroy
      redirect_to action: 'index'
    else
      render :show
    end
  end

  private

  def blog_params
    params.require(:blog).permit(
      :title,
      :content
    )
  end
end